import { ReactNode, useState, useContext, createContext } from "react";
import { weatherByCity } from "../service/weather";
import { FormattedWeather } from "../types/formattedWeather.type";

type WeatherContextType = {
  city: string | undefined;
  forecast: any;
  setCity: (city: string) => void;
  setForecast: (forecast: any) => void;
  getWeatherByCity: (city: string) => Promise<void>;
  current: any;
  loading: boolean;
  error: string | undefined;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [forecast, setForecast] = useState<FormattedWeather["forecast"] | null>(
    null
  );
  const [city, setCity] = useState<string | undefined>();
  const [current, setCurrent] = useState<FormattedWeather["current"] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const getWeatherByCity = async (_city: string) => {
    setLoading(true);
    try {
      const response = await weatherByCity(_city);
      setError(undefined);
      setForecast(response?.forecast);
      setCurrent(response?.current);
    } catch (error: any) {
      console.error(error);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (newCity: string) => {
    if (newCity !== city) {
      setCity(newCity);
      getWeatherByCity(newCity);
    }
  };
  return (
    <WeatherContext.Provider
      value={{
        city,
        forecast,
        setCity: handleCityChange,
        setForecast,
        getWeatherByCity,
        current,
        loading,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};

export { WeatherProvider, useWeather };
