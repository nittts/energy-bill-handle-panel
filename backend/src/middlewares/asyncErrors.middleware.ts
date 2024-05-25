import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { log } from "../log/logger";

class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const errorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const getMessage = () => {
    if (err instanceof AppError) return err.message;
    if (err instanceof Prisma.PrismaClientKnownRequestError) return `Erro de armazenamento conhecido:  ${err.message}`;
    if (err instanceof Prisma.PrismaClientUnknownRequestError)
      return `Erro de armazenamento desconhecido: ${err.message}`;
    if (err instanceof Prisma.PrismaClientValidationError) return `Erro de validação de armazenamento: ${err.message}`;

    return "Erro de Servidor Interno.";
  };

  const getStatus = () => {
    if (err instanceof AppError) return err.statusCode;
    if (err instanceof Prisma.PrismaClientKnownRequestError) return 500;
    if (err instanceof Prisma.PrismaClientUnknownRequestError) return 500;
    if (err instanceof Prisma.PrismaClientValidationError) return 400;

    return 500;
  };

  console.error(err);

  log.error(err, getMessage(), getStatus());

  res.status(getStatus()).json({ message: getMessage(), statusCode: getStatus() });
};

export { AppError, errorHandling };
