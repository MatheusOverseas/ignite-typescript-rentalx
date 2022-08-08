import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "../../useCases/createSpecification/CreateSpecificationUseCase"
import { CreateSpecificationController } from "../../useCases/createSpecification/CreateSpecificationController"

const specificationsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }