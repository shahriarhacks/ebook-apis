import express, { Router } from "express";
import userRouter from "../user/userRouter";

const router = express.Router();

type IModuleRouter = { path: string; route: Router };

const moduleRoutes: IModuleRouter[] = [
   {
      path: "/users",
      route: userRouter,
   },
];

moduleRoutes.forEach((moduleRoute: IModuleRouter) => {
   router.use(moduleRoute.path, moduleRoute.route);
});

export default router;
