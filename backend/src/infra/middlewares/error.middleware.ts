import { NextFunction, Response, Request } from "express";

import { HttpException } from "../../types/HttpException";

export function errorMiddleware(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return req.status(500).json({
    statusCode: 500,
    message: err.message || "Internal Server Error",
  });
}
