import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config";

const globalErrorHandler = (
   error: HttpError,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const statusCode = error.statusCode || 500;
   return res.status(statusCode).json({
      statusCode,
      success: false,
      message: error.message,
      stack: config.env === "development" ? error.stack : null,
   });
};

export default globalErrorHandler;
