import { useGetBillsById } from "@/hooks/bills";
import { Flex, Spin } from "antd";
import BillInformationHistory from "./BillInformation.history";
import BillInformationCompany from "./BillInformation.company";
import BillInformationDescription from "./BillInformation.description";

export default function BillInformation({ id }: { id: string | null }) {
  const { bill } = useGetBillsById({ id });

  if (!bill) {
    return <Spin />;
  }

  const { company, billHistory, ...billRest } = bill;

  return (
    <Flex gap={6} vertical>
      <BillInformationDescription bill={billRest} />
      <BillInformationCompany company={company} />
      <BillInformationHistory history={billHistory} />
    </Flex>
  );
}
