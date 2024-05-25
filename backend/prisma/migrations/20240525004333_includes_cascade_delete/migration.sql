-- DropForeignKey
ALTER TABLE "bill_history" DROP CONSTRAINT "bill_history_billId_fkey";

-- DropForeignKey
ALTER TABLE "bill_information" DROP CONSTRAINT "bill_information_BillId_fkey";

-- AddForeignKey
ALTER TABLE "bill_information" ADD CONSTRAINT "bill_information_BillId_fkey" FOREIGN KEY ("BillId") REFERENCES "bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bill_history" ADD CONSTRAINT "bill_history_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
