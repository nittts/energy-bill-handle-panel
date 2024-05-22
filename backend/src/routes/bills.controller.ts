import { Router } from "express";
import { ZodValidator } from "../middlewares/zod-validation.middleware";
import { queryBillsParams } from "../schemas/bill.schemas";
import billsController from "../controllers/bills.controller";

export default (router: Router) => {
  router.get("/", ZodValidator(queryBillsParams, "query"), billsController.index);

  return router;
};
