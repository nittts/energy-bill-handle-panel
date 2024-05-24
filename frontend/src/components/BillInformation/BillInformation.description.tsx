import { Bill } from "@/@types/bill";
import { FormattersUtils } from "@/utils/formatters";
import { Card, Badge, Flex, Button, Row, Col, Statistic, Typography, CollapseProps, Collapse } from "antd";

const { Paragraph } = Typography;
const { Ribbon } = Badge;

export default function BillInformationDescription({ bill }: { bill: Bill }) {
  const {
    dueDate = new Date(),
    emissionDate = new Date(),
    energyConsumption = 0,
    energyReimbursed = 0,
    gdEconomy = 0,
    gdTotal = 0,
    referenceMonth = new Date(),
    uploadPath = "",
    information = { info: "" },
  } = bill;

  const collapseItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "Informação",
      children: <Paragraph>{information.info}</Paragraph>,
    },
  ];

  const Statistics = () =>
    [
      { value: energyConsumption, suffix: "kWh", label: "Consumo de energia elétrica (kWh)" },
      { value: energyReimbursed, suffix: "kWh", label: "Energia Compensada (kWh)" },
      { value: gdTotal, suffix: "R$", label: "Valor total sem GD (R$)" },
      { value: gdEconomy, suffix: "R$", label: "Economia GD (R$)" },
    ].map((statistic) => (
      <Col md={24} lg={12}>
        <Card bordered={false}>
          <Statistic title={statistic.label} value={statistic.value} suffix={statistic.suffix} />
        </Card>
      </Col>
    ));

  const Dates = () =>
    [
      { value: FormattersUtils.formatDateLong(dueDate), label: "Vencimento", color: "red" },
      { value: FormattersUtils.formatDateLong(emissionDate), label: "Emitido em", color: "blue" },
      { value: FormattersUtils.formatDateMonth(referenceMonth), label: "Mês de Referência", color: "green" },
    ].map((date) => (
      <Col xs={24} md={12}>
        <Ribbon text={date.label} color={date.color}>
          <Card size="small">{date.value}</Card>
        </Ribbon>
      </Col>
    ));

  return (
    <Flex vertical gap={10}>
      <Button type="primary" href={uploadPath} target="_blank" style={{ alignSelf: "flex-end" }}>
        Baixar PDF da Fatura
      </Button>
      <Row gutter={2} align="stretch" justify="start">
        <Statistics />
      </Row>
      <Row gutter={[10, 10]} align="middle" justify="center">
        <Dates />
      </Row>
      <Collapse items={collapseItems} defaultActiveKey={["1"]} />
    </Flex>
  );
}
