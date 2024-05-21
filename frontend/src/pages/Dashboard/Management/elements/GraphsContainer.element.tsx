import { Card, Flex } from "antd";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

import EnergyConsumptionGraph from "@/components/Graphs/Graphs.energyConsumption";
import EnergyCostGraph from "@/components/Graphs/Graphs.energyCost";
import FadeIn from "@/components/Animations/Animations.FadeIn";

function GraphsContainer() {
  return (
    <FadeIn>
      <Card title="Detalhes do ultimo ano" extra={<MdOutlineEnergySavingsLeaf size={30} />}>
        <Flex gap="middle" wrap="wrap">
          <EnergyConsumptionGraph />
          <EnergyCostGraph />
        </Flex>
      </Card>
    </FadeIn>
  );
}

export default GraphsContainer;
