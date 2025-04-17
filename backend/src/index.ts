import express, { Express } from "express";
import mainRouter from "./router/index";
import { Config } from "./config";
import cors from "cors";

try {
  if (!Config.weather.apiKey) {
    throw new Error("WEATHER_API_KEY is not set");
  }

  const app: Express = express();

  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(mainRouter);

  app.listen(Config.port, () => {
    console.log(`Server is running on port ${Config.port}`);
  });
} catch (error) {
  console.error("Main App error", error);
  process.exit(1);
}
