import dotenv from "dotenv";
dotenv.config();

interface ConfigInterface {
  stage: string;
  weather: {
    apiKey: string;
    apiUrl: string;
  };
  location: {
    apiUrl: string;
    apiKey: string;
  };
  port: number;
}

export const Config: ConfigInterface = {
  stage: process.env.NODE_ENV || "development",
  weather: {
    apiKey: process.env.WEATHER_API_KEY || "",
    apiUrl:
      process.env.WEATHER_API_URL || "https://api.openweathermap.org/data",
  },
  location: {
    apiUrl:
      process.env.LOCATION_API_URL ||
      "http://api.openweathermap.org/geo",
    apiKey: process.env.WEATHER_API_KEY || "",
  },
  port: Number(process.env.PORT) || 3000,
};
