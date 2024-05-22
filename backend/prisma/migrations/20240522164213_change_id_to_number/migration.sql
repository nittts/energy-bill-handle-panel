/*
  Warnings:

  - You are about to drop the column `clientId` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `installationId` on the `bill` table. All the data in the column will be lost.
  - Added the required column `clientNumber` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `installationNumber` to the `bill` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "bill_clientId_referenceMonth_installationId_idx";

-- AlterTable
ALTER TABLE "bill" DROP COLUMN "clientId",
DROP COLUMN "installationId",
ADD COLUMN     "clientNumber" TEXT NOT NULL,
ADD COLUMN     "installationNumber" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "bill_clientNumber_referenceMonth_installationNumber_idx" ON "bill"("clientNumber", "referenceMonth", "installationNumber");
