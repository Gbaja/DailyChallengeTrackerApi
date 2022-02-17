import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400).send({
      message: "Validation error",
      errors: validationErrors.array().map((error) => error.msg)
    });
  }

  next();
};