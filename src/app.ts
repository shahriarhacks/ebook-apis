import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import createHttpError from "http-errors";

const app: Application = express();

app.get("/", (_req, res) => {
   throw createHttpError(500, "something went wrong");
   res.status(200).json({
      message: "Welcome to ebook api Server!",
   });
});

// Global error handler
app.use(globalErrorHandler);

// not found route catch
app.use((req: Request, res: Response, next: NextFunction) => {
   res.status(404).json({
      statusCode: 404,
      success: false,
      message: "Not Found",
      errorMessages: [
         {
            path: req.originalUrl,
            message: "Requested path not found",
         },
      ],
   });
   next();
});

export default app;
