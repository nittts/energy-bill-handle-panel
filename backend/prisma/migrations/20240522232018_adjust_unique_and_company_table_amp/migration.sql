/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bill" DROP CONSTRAINT "bill_companyId_fkey";

-- DropIndex
DROP INDEX "bill_history_billId_key";

-- DropTable
DROP TABLE "Company";

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "stateSubscription" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_id_key" ON "company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "company_cpfCnpj_key" ON "company"("cpfCnpj");

-- AddForeignKey
ALTER TABLE "bill" ADD CONSTRAINT "bill_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
