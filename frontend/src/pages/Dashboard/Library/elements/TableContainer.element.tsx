import FadeIn from "@/components/Animations/Animations.FadeIn";
import BillsTable from "@/components/Tables/Bills";
import { useGetBills } from "@/hooks/bills";
import { useClientNumber } from "@/stores/client";
import { Card } from "antd";
import { Key } from "react";

type TableContainerProps = {
  onSelect: (selectedKeys: Key[]) => void;
  selected: Key[];
};

function TableContainer({ onSelect, selected }: TableContainerProps) {
  const clientNumber = useClientNumber();

  const { bills, getBillsStatus } = useGetBills({ clientNumber });

  return (
    <FadeIn>
      <Card style={{ overflow: "auto" }}>
        <BillsTable selected={selected} onSelect={onSelect} data={bills} loading={getBillsStatus === "success"} />
      </Card>
    </FadeIn>
  );
}

export default TableContainer;
