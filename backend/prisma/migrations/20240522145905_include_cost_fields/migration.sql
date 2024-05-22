/*
  Warnings:

  - You are about to drop the column `municipalityContribution` on the `bill` table. All the data in the column will be lost.
  - Added the required column `energyElectricCost` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energyGDCost` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energySceeeWithoutICMSCost` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipalityContributionCost` to the `bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bill" DROP COLUMN "municipalityContribution",
ADD COLUMN     "energyElectricCost" INTEGER NOT NULL,
ADD COLUMN     "energyGDCost" INTEGER NOT NULL,
ADD COLUMN     "energySceeeWithoutICMSCost" INTEGER NOT NULL,
ADD COLUMN     "municipalityContributionCost" INTEGER NOT NULL;
