import { Router } from 'express';
import multer from "multer";

import { listCategoriesController } from "../modules/cars/useCases/listCategories"
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { importCategoryController } from "../modules/cars/useCases/importCategory"

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  console.log("Reload Working");
  console.log("Reload Working");
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes } 