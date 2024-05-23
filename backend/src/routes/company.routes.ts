import { Router } from "express";
import companyController from "../controllers/company.controller";

export default (router: Router) => {
  router.get("/", companyController.index);

  return router;
};
