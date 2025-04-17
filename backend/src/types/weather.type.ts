import { z } from 'zod';

const WeatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const MainSchema = z.object({
  temp: z.number(),
  feels_like: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  pressure: z.number(),
  sea_level: z.number(),
  grnd_level: z.number(),
  humidity: z.number(),
  temp_kf: z.number(),
});

const CloudsSchema = z.object({
  all: z.number(),
});

const WindSchema = z.object({
  speed: z.number(),
  deg: z.number(),
  gust: z.number(),
});

const SysSchema = z.object({
  pod: z.string(),
});

const ForecastItemSchema = z.object({
  dt: z.number(),
  main: MainSchema,
  weather: z.array(WeatherSchema),
  clouds: CloudsSchema,
  wind: WindSchema,
  visibility: z.number(),
  pop: z.number(),
  sys: SysSchema,
  dt_txt: z.string(),
});

const CitySchema = z.object({
  id: z.number(),
  name: z.string(),
  coord: z.object({
    lat: z.number(),
    lon: z.number(),
  }),
  country: z.string(),
  population: z.number(),
  timezone: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
});

export const ForecastResponseSchema = z.object({
  cod: z.string(),
  message: z.number(),
  cnt: z.number(),
  list: z.array(ForecastItemSchema),
  city: CitySchema,
});

export type WeatherType = z.infer<typeof ForecastResponseSchema>;