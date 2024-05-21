import { Key, ReactElement, useState } from "react";
import { Button, Flex, Segmented } from "antd";
import { MdGridView, MdList } from "react-icons/md";

import GridBillsContainer from "./elements/GridBillsContainer.element";
import TableContainer from "./elements/TableContainer.element";

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

  const onViewChange = (value: IViews) => setView(value);

  const onSelect = (keys: Key[]) => {
    setSelected(keys);
  };

  return (
    <>
      <Flex justify="flex-end" align="center" gap={10}>
        <Segmented<IViews> size="large" options={options} onChange={onViewChange} />
        <Button type="primary" disabled={!selected.length}>
          Exportar Faturas
        </Button>
      </Flex>

      {view === "TABLE" && <TableContainer onSelect={onSelect} selected={selected} />}
      {view === "GRID" && <GridBillsContainer onSelect={onSelect} selected={selected} />}
    </>
  );
}

export default Library;
