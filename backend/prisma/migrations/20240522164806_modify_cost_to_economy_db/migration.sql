/*
  Warnings:

  - You are about to drop the column `energyGDCost` on the `bill` table. All the data in the column will be lost.
  - Added the required column `energyGDEconomy` to the `bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bill" DROP COLUMN "energyGDCost",
ADD COLUMN     "energyGDEconomy" INTEGER NOT NULL;
