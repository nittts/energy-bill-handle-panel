import { Router } from "express";
import companyController from "../controllers/company.controller";
import { ZodValidator } from "../middlewares/zod-validation.middleware";
import { findById, queryCompanyParams } from "../schemas/company.schemas";

export default (router: Router) => {
  router.get("/", ZodValidator(queryCompanyParams, "query"), companyController.index);

  router.get("/:id", ZodValidator(findById, "params"), companyController.findById);

  return router;
};
