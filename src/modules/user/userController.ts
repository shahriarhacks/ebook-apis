import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { UserServices } from "./userServices";

const create = async (req: Request, res: Response, next: NextFunction) => {
   const { name, email, password } = req.body;
   if (!name || !email || !password) {
      return next(createHttpError(400, "All value must need to provide"));
   }
   const isExist = await UserServices.readUserByEmail(email);

   if (!isExist) {
      return next(createHttpError(409, "Email already exist!"));
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   res.json({ success: true });
};

export const UserController = { create };
