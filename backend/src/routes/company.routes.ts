import { Router } from "express";
import companyController from "../controllers/company.controller";
import { ZodValidator } from "../middlewares/zod-validation.middleware";
import { queryCompanyParams } from "../schemas/company.schemas";

export default (router: Router) => {
  router.get("/", ZodValidator(queryCompanyParams, "query"), companyController.index);

  return router;
};
