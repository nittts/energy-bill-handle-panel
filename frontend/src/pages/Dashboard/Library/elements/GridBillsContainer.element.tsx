import FadeIn from "@/components/Animations/Animations.FadeIn";
import { Card, Flex } from "antd";
import BillCard from "@/components/Card";
import { Key } from "react";

type GridContainerProps = {
  onSelect: (selectedKeys: Key[]) => void;
  selected: Key[];
};

const style = {
  dislpay: "flex",
  flexWrap: "wrap" as const,
  gap: 16,
  justifyContent: "space-evenly",
};

function GridBillsContainer({ onSelect, selected = [] }: GridContainerProps) {
  const bills = Array.from(new Array(20)).map((_, index) => ({
    key: `${index}`,
    id: `${index}`,
    url: "asdçasldçlsa",
    clientNumber: "019231829",
    referenceMonth: new Date(),
    energyConsumption: 912098123,
    energyReimbursed: 912098123,
    gdTotal: 1209381902,
    gdEconomy: 1209381902,
  }));

  return (
    <FadeIn>
      <Card>
        <Flex style={style}>
          {bills.map((bill) => (
            <BillCard bill={bill} onSelect={onSelect} selected={selected} />
          ))}
        </Flex>
      </Card>
    </FadeIn>
  );
}

export default GridBillsContainer;
