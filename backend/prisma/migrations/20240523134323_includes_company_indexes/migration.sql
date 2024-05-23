-- CreateIndex
CREATE INDEX "company_clientNumber_cpfCnpj_name_idx" ON "company"("clientNumber", "cpfCnpj", "name");
