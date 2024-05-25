import supertest from "supertest";
import app from "../app";
import { prismaMock } from "./mocks/utils/prisma.mock";
import {
  mockBill,
  mockBillGraphs,
  mockBillWithRelations,
  prismaMockBill,
  prismaMockBillWithRelations,
} from "./mocks/bills/bills.mock";
import path from "path";

const request = supertest(app);

describe("[DOMAIN] Bills", () => {
  it("[GET] '/', should be able to fetch bills by 'clientNumber' | 7202788969 ", async () => {
    prismaMock.bill.findMany.mockResolvedValue([prismaMockBill]);

    const res = await request.get("/bills").query({ clientNumber: "7202788969" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([mockBill]);
  });

  it("[GET] '/', should be able to fetch bills by 'installationNumber' | 7202788969 ", async () => {
    prismaMock.bill.findMany.mockResolvedValue([prismaMockBill]);

    const res = await request.get("/bills").query({ installationNumber: "7202788969" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([mockBill]);
  });

  it("[GET] '/', should be able to fetch bills by 'referenceMonth' | 2023-06-01T03:00:00.000Z ", async () => {
    prismaMock.bill.findMany.mockResolvedValue([prismaMockBill]);

    const res = await request.get("/bills").query({ referenceMonth: "2023-06-01T03:00:00.000Z" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([mockBill]);
  });

  it("[GET] '/', should be able to fetch bills by 'dueDate' | 2023-06-01T03:00:00.000Z ", async () => {
    prismaMock.bill.findMany.mockResolvedValue([prismaMockBill]);

    const res = await request.get("/bills").query({ dueDate: "2023-06-01T03:00:00.000Z" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([mockBill]);
  });

  it("[GET] '/:id', should be able to fetch bill by 'id' | 950153d9-f2e7-4736-a6ce-89fd9fae91c2 ", async () => {
    prismaMock.bill.findUnique.mockResolvedValue(prismaMockBillWithRelations);

    const res = await request.get("/bills/950153d9-f2e7-4736-a6ce-89fd9fae91c2");
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual(mockBillWithRelations);
  });

  it("[GET] 'bills/graphs', should be able to get dashboard graphs series", async () => {
    prismaMock.bill.findMany.mockResolvedValue([prismaMockBill]);

    const res = await request.get("/bills/graphs").query({
      clientNumber: "7202788969",
      startDate: "2023-01-01T00:00:00-0300",
      endDate: "2023-12-31T23:59:59-0300",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual(mockBillGraphs);
  });

  it("[POST] '/', should be able to upload a bill", async () => {
    prismaMock.$transaction.mockResolvedValue(prismaMockBill);

    const filePath = path.resolve(__dirname, "./mocks/bills/bill_test.pdf");

    const res = await request
      .post("/bills/upload")
      .attach("files[]", filePath)
      .set("Content-Type", "multipart/form-data");

    expect(res.statusCode).toBe(201);
    expect(res.body).toStrictEqual([mockBill]);
  });

  it("[DELETE] /:id, should be able to delete a bill by 'id' | 950153d9-f2e7-4736-a6ce-89fd9fae91c2", async () => {
    prismaMock.bill.findUnique.mockResolvedValue(prismaMockBill);
    prismaMock.bill.delete.mockResolvedValue(prismaMockBill);

    const res = await request.get("/bills/950153d9-f2e7-4736-a6ce-89fd9fae91c2");
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual(mockBill);
  });
});
