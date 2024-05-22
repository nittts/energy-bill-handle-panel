/*
  Warnings:

  - You are about to drop the `Bill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BillInformation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BillInformation" DROP CONSTRAINT "BillInformation_BillId_fkey";

-- DropTable
DROP TABLE "Bill";

-- DropTable
DROP TABLE "BillInformation";

-- CreateTable
CREATE TABLE "bill" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "installationId" TEXT NOT NULL,
    "energyElectric" INTEGER NOT NULL,
    "energySceeeWithoutICMS" INTEGER NOT NULL,
    "energyGD" INTEGER NOT NULL,
    "municipalityContribution" INTEGER NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "referenceMonth" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill_information" (
    "id" SERIAL NOT NULL,
    "BillId" TEXT NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "bill_information_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bill_id_key" ON "bill"("id");

-- CreateIndex
CREATE INDEX "bill_clientId_referenceMonth_installationId_idx" ON "bill"("clientId", "referenceMonth", "installationId");

-- CreateIndex
CREATE UNIQUE INDEX "bill_information_BillId_key" ON "bill_information"("BillId");

-- AddForeignKey
ALTER TABLE "bill_information" ADD CONSTRAINT "bill_information_BillId_fkey" FOREIGN KEY ("BillId") REFERENCES "bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
