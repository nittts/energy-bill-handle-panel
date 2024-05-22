-- CreateTable
CREATE TABLE "Bill" (
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

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillInformation" (
    "id" SERIAL NOT NULL,
    "BillId" TEXT NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "BillInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bill_id_key" ON "Bill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BillInformation_BillId_key" ON "BillInformation"("BillId");

-- AddForeignKey
ALTER TABLE "BillInformation" ADD CONSTRAINT "BillInformation_BillId_fkey" FOREIGN KEY ("BillId") REFERENCES "Bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
