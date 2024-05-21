import { ReactElement, useState } from "react";
import { Flex, Segmented } from "antd";
import { MdGridView, MdList } from "react-icons/md";

import ExportBills from "./elements/ExportBillsContainer.element";
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
  const [view, setView] = useState<IViews>("TABLE");

  const onViewChange = (value: IViews) => setView(value);

  return (
    <>
      <Flex justify="flex-end" align="center" gap={10}>
        <Segmented<IViews> size="large" options={options} onChange={onViewChange} />
        <ExportBills />
      </Flex>
      {view === "TABLE" && <TableContainer />}
      {view === "GRID" && <GridBillsContainer />}
    </>
  );
}

export default Library;
