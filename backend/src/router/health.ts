import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/health", (_, res) => {
  try {
    res.status(200).json({ message: "Healthy" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

