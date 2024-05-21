import { Table } from "antd";
import getColumns from "./Tables.bills.columns";
import { Bill } from "@/@types/bill";
import { Key } from "react";

type BillsTableProps = {
  data: Bill[];
  onSelect?: (selectedKeys: Key[]) => void;
  selected?: Key[];
};

function BillsTable({ data, onSelect, selected }: BillsTableProps) {
  const onChange = (keys: Key[]) => {
    if (onSelect) {
      onSelect(keys);
    }
  };

  return (
    <Table
      {...(onSelect && { rowSelection: { type: "checkbox", onChange, selectedRowKeys: selected } })}
      dataSource={data}
      columns={getColumns()}
    />
  );
}

export default BillsTable;
