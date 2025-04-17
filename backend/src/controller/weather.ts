import axios from "axios";
import { Config } from "../config";
import { getCoordinates } from "./location";

import { WeatherType } from "../types/weather.type";
import { LocationType } from "../types/location.type";

if (!Config.weather.apiKey) {
  throw new Error("WEATHER_API_KEY is not set");
}

const instance = axios.create({
  baseURL: Config.weather.apiUrl,
  timeout: 4000,
  headers: {},
  params: {
    appid: Config.weather.apiKey,
  },
});
const getWeatherByCity = async (
  city: string
): Promise<[WeatherType | null, any | null]> => {
  try {
    const [data, error] = await getCoordinates(city);

    if (error || !data) {
      console.error(
        "Error fetching weather city coordinates",
        error?.response?.data
      );
      return [null, error];
    }

    const { lat, lon } = data[0] as LocationType;

    const response = await instance.get("/2.5/forecast", {
      params: {
        lat,
        lon,
        units: "metric",
        exclude: "current,minutely,hourly,alerts",
        cnt: 40,
      },
    });

    const weatherData = response.data;
  
    return [weatherData, null];
  } catch (error: any) {
    console.error("Error fetching weather data:", error?.response?.data);
    return [null, error];
  }
};

export { getWeatherByCity };
