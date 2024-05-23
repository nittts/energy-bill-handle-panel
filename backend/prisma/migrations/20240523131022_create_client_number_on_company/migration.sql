/*
  Warnings:

  - A unique constraint covering the columns `[clientNumber]` on the table `company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientNumber` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN     "clientNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "company_clientNumber_key" ON "company"("clientNumber");
