import { NextFunction, Response, Request } from "express";

import { HttpException } from "../../types/HttpException";

export function errorMiddleware(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(err.status).json({
    status: 500,
    message: err.message || "Internal Server Error",
  });
}
