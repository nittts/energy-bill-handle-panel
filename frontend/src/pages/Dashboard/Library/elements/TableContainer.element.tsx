import FadeIn from "@/components/Animations/Animations.FadeIn";
import BillsTable from "@/components/Tables/Bills";
import { Card } from "antd";
import { Key } from "react";

type TableContainerProps = {
  onSelect: (selectedKeys: Key[]) => void;
  selected: Key[];
};

function TableContainer({ onSelect, selected }: TableContainerProps) {
  const bills = Array.from(new Array(20)).map((_, index) => ({
    key: `${index}`,
    id: `${index}`,
    url: "asdçasldçlsa",
    clientNumber: "019231829",
    referenceMonth: new Date(),
    energyConsumption: 912098123,
    energyReimbursed: 912098123,
    gdTotal: 1209381902,
    gdEconomy: 12093819021,
  }));

  return (
    <FadeIn>
      <Card>
        <BillsTable selected={selected} onSelect={onSelect} data={bills} />
      </Card>
    </FadeIn>
  );
}

export default TableContainer;
