import { Product } from "../entities/Product";
import { productsRepository } from "../repositories/productsRepository";

class ProductsService {
  async create(input: any): Promise<void> {
    const repository = productsRepository;

    if (input.name.length <= 0) return;

    const productAlreadyExists = await repository.findOne({
      where: {
        name: input.name,
        fornecedor: input.fornecedor,
      },
    });

    if (productAlreadyExists) return;

    const product = repository.create(input);
    await repository.save(product);
  }
  async get(id: string): Promise<Product> {
    const product = await productsRepository.findOne({
      where: {
        id,
      },
    });
    if (!product) throw new Error("Product not found");

    return product;
  }
}

export { ProductsService };
