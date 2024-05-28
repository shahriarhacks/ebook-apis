import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const create = async (req: Request, res: Response, next: NextFunction) => {
   const { name, email, password } = req.body;
   if (!name || !email || !password) {
      return next(createHttpError(400, "All value must need to provide"));
   }
   res.json({ success: true });
};

export const UserController = { create };
