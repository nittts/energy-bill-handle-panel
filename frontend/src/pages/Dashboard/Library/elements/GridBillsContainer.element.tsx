import FadeIn from "@/components/Animations/Animations.FadeIn";
import { Card, Flex } from "antd";
import BillCard from "@/components/Card";
import { Key } from "react";
import { useGetBills } from "@/hooks/bills";
import { useClientNumber } from "@/stores/client";
import { Bill } from "@/@types/bill";

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
  const clientNumber = useClientNumber();

  const { bills, getBillsStatus } = useGetBills({ clientNumber });

  return (
    <FadeIn>
      <Card>
        <Flex style={style}>
          {bills.map((bill: Bill) => (
            <BillCard bill={bill} onSelect={onSelect} selected={selected} loading={getBillsStatus !== "success"} />
          ))}
        </Flex>
      </Card>
    </FadeIn>
  );
}

export default GridBillsContainer;
