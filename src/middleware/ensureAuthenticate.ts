import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "484a7c311864834e9827a313e78cf575"
    ) as IPayload;

    req.body = {
      ...req.body,
      userId: sub,
    };

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
