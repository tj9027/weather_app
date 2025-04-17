import { Router } from "express";
import { healthRouter } from "./health";
import { weatherRouter } from "./weather";

const mainRouter = Router();

mainRouter.use(healthRouter);
mainRouter.use(weatherRouter);

export default mainRouter