import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      nome,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
