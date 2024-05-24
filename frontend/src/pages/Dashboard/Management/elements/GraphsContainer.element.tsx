import { Card, Col, Row, Segmented } from "antd";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

import EnergyConsumptionGraph from "@/components/Graphs/Graphs.energyConsumption";
import EnergyCostGraph from "@/components/Graphs/Graphs.energyCost";
import FadeIn from "@/components/Animations/Animations.FadeIn";
import { useGetBillsGraphs } from "@/hooks/bills";
import { useClientNumber } from "@/stores/client";
import dayjs from "dayjs";
import { useMemo, useState } from "react";

const baseStartDate = dayjs().subtract(1, "year").toISOString();
const endDate = dayjs().toISOString();

type IOptions = {
  value: string;
  label: string;
};

const options: IOptions[] = [
  { value: baseStartDate, label: "Último ano" },
  { value: dayjs().subtract(5, "years").toISOString(), label: "5 anos" },
  { value: dayjs().subtract(10, "years").toISOString(), label: "10 anos" },
];

function GraphsContainer() {
  const [startDate, setStartDate] = useState(baseStartDate);
  const clientNumber = useClientNumber();
  const { billGraphs, getBillGraphsStatus } = useGetBillsGraphs({ endDate, startDate, clientNumber });

  const onViewChange = (value: string) => setStartDate(value);

  const { series, categories } = billGraphs;

  const graphs = useMemo(() => {
    if (!series && !categories) return null;

    const { energyConsumption, energyReimbursed, gdEconomy, gdTotal } = series;

    return (
      <>
        <Col md={24} lg={12}>
          <EnergyConsumptionGraph series={[energyConsumption, energyReimbursed]} categories={categories} />
        </Col>
        <Col md={24} lg={12}>
          <EnergyCostGraph series={[gdEconomy, gdTotal]} categories={categories} />
        </Col>
      </>
    );
  }, [series, categories]);

  const Graphs = () => getBillGraphsStatus === "success" && graphs;

  return (
    <FadeIn>
      <Card title="Detalhes do ultimo ano" extra={<MdOutlineEnergySavingsLeaf size={30} />}>
        <Row align="middle" justify="end" style={{ marginBottom: 6 }}>
          <Segmented size="large" options={options} onChange={onViewChange} />
        </Row>
        <Row style={{ minHeight: 320 }} gutter={[6, 6]}>
          <Graphs />
        </Row>
      </Card>
    </FadeIn>
  );
}

export default GraphsContainer;
