import { BillHistory } from "@/@types/bill";
import BillHistoryTable from "../Tables/BillHistory";
import { Collapse } from "antd";

export default function BillInformationHistory({ history }: { history: BillHistory[] }) {
  return (
    <Collapse
      items={[{ children: <BillHistoryTable history={history} />, label: "Histórico de consumo" }]}
      style={{ overflow: "auto" }}
    />
  );
}
