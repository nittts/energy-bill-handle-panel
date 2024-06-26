import { Router } from "express";

import { ZodValidator } from "../middlewares/zod-validation.middleware";
import fileUpload from "../middlewares/multer.middleware";

import { dashboardGraphQuery, findById, queryBillsParams } from "../schemas/bill.schemas";

import billsController from "../controllers/bills.controller";

export default (router: Router) => {
  router.get("/", ZodValidator(queryBillsParams, "query"), billsController.index);

  router.get("/graphs", ZodValidator(dashboardGraphQuery, "query"), billsController.dashboardGraphs);

  router.get("/:id", ZodValidator(findById, "params"), billsController.getById);

  router.post("/upload", fileUpload, billsController.uploadBills);

  router.delete("/:id", ZodValidator(findById, "params"), billsController.deleteBill);

  return router;
};
