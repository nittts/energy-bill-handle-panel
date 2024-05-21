import FadeIn from "@/components/Animations/Animations.FadeIn";
import BillsTable from "@/components/Tables/Bills";
import { Card } from "antd";

function LastBillsContainer() {
  const bills = Array.from(new Array(20)).map((_, index) => ({
    id: `${index}`,
    url: "asdçasldçlsa",
    clientNumber: "019231829",
    referenceMonth: new Date(),
    energyConsumption: 912098123,
    energyReimbursed: 912098123,
    gdTotal: 1209381902,
    gdEconomy: 1209381902,
  }));

  return (
    <FadeIn>
      <Card>
        <BillsTable data={bills} />
      </Card>
    </FadeIn>
  );
}

export default LastBillsContainer;
