import { User } from "../models/User";
import { hash } from "bcryptjs";

interface IUserRequest {
  nome: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ nome, email, password }: IUserRequest) {
    if (!email) {
      throw new Error(`Email incorrect`);
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new Error(`User ${email} already exists`);
    }

    const passwordHash = await hash(password, 8);

    const user = await User.create({
      nome,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserService };
