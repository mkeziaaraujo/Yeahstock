import { Request, Response } from "express";
import { ProductsService } from "../services/ProductsService";

class ProductsController {
  async create(request: Request, response: Response): Promise<Response> {
    const input = request.body;

    const service = new ProductsService();
    await service.create(input);

    return response.status(201).send();
  }
  async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = new ProductsService();

    try {
      const output = await service.get(id);
      return response.status(200).send(output);
    } catch (e) {
      console.log(e);
      return response.status(404).send(e.message);
    }
  }
}

export { ProductsController };
