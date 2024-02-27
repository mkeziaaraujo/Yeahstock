import { Router } from "express";

import { productsRoutes } from "../products/routes/productsRoutes";

const routes = Router();

routes.use("/products", productsRoutes);

export { routes };
