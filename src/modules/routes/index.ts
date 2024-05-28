import express, { Router } from "express";

const router = express.Router();

type IModuleRouter = { path: string; route: Router };

const moduleRoutes: IModuleRouter[] = [];

moduleRoutes.forEach((moduleRoute: IModuleRouter) => {
   router.use(moduleRoute.path, moduleRoute.route);
});

export default router;
