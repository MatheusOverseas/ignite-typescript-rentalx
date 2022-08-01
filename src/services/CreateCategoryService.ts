import { ICategoriesRepository } from "../repositories/ICategoriesRepository";


interface IRequest {
  name: string;
  description: string;
}

/**
 * [X] Definir o tipo de retorno
 * [X] Alterar o retorno de error
 * [X] acessar o repositorio
 * [X] Retornar algo
 */
class CreateCategoryService {

  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already Exists")
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService }