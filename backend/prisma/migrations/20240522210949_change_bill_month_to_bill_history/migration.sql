/*
  Warnings:

  - The primary key for the `bill_information` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `bill_information` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emissionDate` to the `bill` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "bill_clientNumber_referenceMonth_installationNumber_idx";

-- AlterTable
ALTER TABLE "bill" ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emissionDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "bill_information" DROP CONSTRAINT "bill_information_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "bill_information_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "bill_information_id_seq";

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "stateSubscription" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill_history" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "monthYear" TIMESTAMP(3) NOT NULL,
    "consumption" INTEGER NOT NULL,
    "averageDayKwh" DOUBLE PRECISION NOT NULL,
    "days" INTEGER NOT NULL,

    CONSTRAINT "bill_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_id_key" ON "Company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bill_history_id_key" ON "bill_history"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bill_history_billId_key" ON "bill_history"("billId");

-- CreateIndex
CREATE INDEX "bill_clientNumber_installationNumber_companyId_idx" ON "bill"("clientNumber", "installationNumber", "companyId");

-- CreateIndex
CREATE INDEX "bill_referenceMonth_dueDate_emissionDate_idx" ON "bill"("referenceMonth", "dueDate", "emissionDate");

-- CreateIndex
CREATE INDEX "bill_createdAt_idx" ON "bill"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "bill_information_id_key" ON "bill_information"("id");

-- AddForeignKey
ALTER TABLE "bill" ADD CONSTRAINT "bill_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bill_history" ADD CONSTRAINT "bill_history_billId_fkey" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
