import { BillHistory } from "@/@types/bill";
import getColumns from "./billHistory.columns";
import { Table } from "antd";

export default function BillHistoryTable({ history }: { history: BillHistory[] }) {
  return <Table columns={getColumns()} dataSource={history} />;
}
