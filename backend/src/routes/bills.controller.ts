import { Router } from "express";

import { ZodValidator } from "../middlewares/zod-validation.middleware";
import fileUpload from "../middlewares/multer.middleware";

import { findById, queryBillsParams } from "../schemas/bill.schemas";

import billsController from "../controllers/bills.controller";

export default (router: Router) => {
  router.get("/", ZodValidator(queryBillsParams, "query"), billsController.index);

  router.get("/:id", ZodValidator(findById, "params"), billsController.getById);

  router.post("/upload", fileUpload, billsController.uploadBills);

  return router;
};
