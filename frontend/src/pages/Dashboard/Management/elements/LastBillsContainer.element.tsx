import FadeIn from "@/components/Animations/Animations.FadeIn";
import BillsTable from "@/components/Tables/Bills";
import { useGetBills } from "@/hooks/bills";
import { useClientNumber } from "@/stores/client";
import { Card } from "antd";

function LastBillsContainer() {
  const clientNumber = useClientNumber();

  const { bills, getBillsStatus } = useGetBills({ clientNumber });

  return (
    <FadeIn>
      <Card style={{ overflow: "auto" }}>
        <BillsTable data={bills} loading={getBillsStatus !== "success"} />
      </Card>
    </FadeIn>
  );
}

export default LastBillsContainer;
