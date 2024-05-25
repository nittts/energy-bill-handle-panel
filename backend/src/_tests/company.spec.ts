import supertest from "supertest";
import { companyMock } from "./mocks/company/company.mock";
import { prismaMock } from "./mocks/utils/prisma.mock";
import app from "../app";

const request = supertest(app);

describe("[DOMAIN] Company", () => {
  it("[GET] '/', should be able to fetch comanpy by clientNumber | 7005400387", async () => {
    prismaMock.company.findMany.mockResolvedValue([companyMock]);

    const res = await request.get("/company").query({ clientNumber: "7005400387" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([companyMock]);
  });

  it("[GET] '/', should be able to fetch comanpy by cpfCnpj | 091407********", async () => {
    prismaMock.company.findMany.mockResolvedValue([companyMock]);

    const res = await request.get("/company").query({ cpfCnpj: "091407********" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([companyMock]);
  });

  it("[GET] '/', should be able to fetch comanpy by name | PLIM TELECOMUNICACOES LTDA ME", async () => {
    prismaMock.company.findMany.mockResolvedValue([companyMock]);

    const res = await request.get("/company").query({ name: "PLIM TELECOMUNICACOES LTDA ME" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([companyMock]);
  });

  it("[GET] '/:id', should be able to fetch comanpy by id | 2b2e34e8-878b-426a-a0c4-06b28c93db11", async () => {
    prismaMock.company.findUnique.mockResolvedValue(companyMock);

    const res = await request.get("/company/2b2e34e8-878b-426a-a0c4-06b28c93db11");
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual(companyMock);
  });
});
