import { Card, Col, Row } from "antd";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

import EnergyConsumptionGraph from "@/components/Graphs/Graphs.energyConsumption";
import EnergyCostGraph from "@/components/Graphs/Graphs.energyCost";
import FadeIn from "@/components/Animations/Animations.FadeIn";

function GraphsContainer() {
  return (
    <FadeIn>
      <Card title="Detalhes do ultimo ano" extra={<MdOutlineEnergySavingsLeaf size={30} />}>
        <Row>
          <Col md={24} lg={12}>
            <EnergyConsumptionGraph />
          </Col>
          <Col md={24} lg={12}>
            <EnergyCostGraph />
          </Col>
        </Row>
      </Card>
    </FadeIn>
  );
}

export default GraphsContainer;
