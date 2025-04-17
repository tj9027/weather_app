import { Config } from "../config";
import { WeatherType } from "../types/backendWeather.type";
import { FormattedWeather } from "../types/formattedWeather.type";

export const weatherByCity = async (
  city: string
): Promise<FormattedWeather> => {
  const url = Config.backend.url + "/weather-by-city/?city=" + city;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data: WeatherType = await response.json();

  const filteredDailyOnly = data?.list?.filter((item: { dt: number }) => {
    const date = new Date(item.dt * 1000);
    return date.getHours() === 13 && date.getMinutes() === 0;
  });
  return {
    current: {
      main: data?.list[0].main,
      weather: data?.list[0].weather,
      timestamp: data?.list[0].dt,
    },
    forecast: filteredDailyOnly?.slice(1).map((item) => {
      return {
        main: item.main,
        weather: item.weather,
        timestamp: item.dt * 1000,
      };
    }),
  };
};
