import { Router, Request, Response } from "express";
import { getWeatherByCity } from "../controller/weather";
const weatherRouter = Router();

const getWeatherRouteHandler = async (req: Request, res: Response) => {
  const city = req.query.city as string;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  const [data, error] = await getWeatherByCity(city);

  if (error) {
    return res.status(500).json({ error: "Weather Controller Error" });
  }

  return res.status(200).json(data);
};

weatherRouter.get("/weather-by-city", async (req: Request, res: Response) => {
  try {
    await getWeatherRouteHandler(req, res);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error?.message || "Internal Server Error" });
  }
});

export { weatherRouter };
