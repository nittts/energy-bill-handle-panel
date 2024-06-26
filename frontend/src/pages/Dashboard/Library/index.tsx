import { Key, ReactElement, useState } from "react";
import { Button, Flex, Segmented } from "antd";
import { MdGridView, MdList } from "react-icons/md";

import GridBillsContainer from "./elements/GridBillsContainer.element";
import TableContainer from "./elements/TableContainer.element";
import { useGetBills } from "@/hooks/bills";
import { Bill } from "@/@types/bill";

type IViews = "TABLE" | "GRID";

type IOptions = {
  value: IViews;
  label: string;
  icon: ReactElement;
};

const options: IOptions[] = [
  { value: "TABLE", label: "Tabela", icon: <MdList size={20} style={{ marginBottom: "-0.25em" }} /> },
  { value: "GRID", label: "Grid", icon: <MdGridView size={20} style={{ marginBottom: "-0.25em" }} /> },
];

function Library() {
  const [selected, setSelected] = useState<Key[]>([]);
  const [view, setView] = useState<IViews>("TABLE");

  const { bills } = useGetBills();

  const onViewChange = (value: IViews) => setView(value);

  const onSelect = (keys: Key[]) => {
    setSelected(keys);
  };

  const onExport = () => {
    const links = (bills || []).reduce((acc, bill: Bill) => {
      if (selected.includes(bill.id)) acc.push(bill.uploadPath);
      return acc;
    }, [] as string[]);

    links.forEach((link) => window.open(link));
    setSelected([]);
  };

  return (
    <>
      <Flex justify="flex-end" align="center" gap={10}>
        <Segmented<IViews> size="large" options={options} onChange={onViewChange} />
        <Button type="primary" disabled={!selected.length} onClick={onExport}>
          Exportar Faturas
        </Button>
      </Flex>

      {view === "TABLE" && <TableContainer onSelect={onSelect} selected={selected} />}
      {view === "GRID" && <GridBillsContainer onSelect={onSelect} selected={selected} />}
    </>
  );
}

export default Library;
