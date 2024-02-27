import { Router } from "express";
import { ProductsController } from "../controllers/productsController";

const productsRoutes = Router();

productsRoutes.post("/", new ProductsController().create);

productsRoutes.get("/:id", new ProductsController().get);

export { productsRoutes };
