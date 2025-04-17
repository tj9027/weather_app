import { z } from "zod";

const WeatherSchema = z.object({
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const MainSchema = z.object({
  temp: z.number(),
});
export const FormattedWeatherSchema = z.object({
  current: z.object({
    main: MainSchema,
    weather: z.array(WeatherSchema),
    timestamp: z.number(),
  }),
  forecast: z.array(
    z.object({
      main: MainSchema,
      weather: z.array(WeatherSchema),
      timestamp: z.number(),
    })
  ),
});

export type FormattedWeather = z.infer<typeof FormattedWeatherSchema>;
