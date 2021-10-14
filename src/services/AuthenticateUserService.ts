import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { User } from "../models/User";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(`Email/Password incorrect`);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error(`Email/Password incorrect`);
    }

    const token = sign(
      {
        email: user.email,
        nome: user.nome,
      },
      "484a7c311864834e9827a313e78cf575",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
