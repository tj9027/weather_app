import { useEffect } from "react";
import { useWeather } from "../store/weatherStore";
import { ForecastCard } from "../component/ForecastCard";
import { ForecastWidget } from "../component/ForecastWidget";

export const Dashboard = () => {
  const { city, forecast, current, loading, error } = useWeather();
  useEffect(() => {}, [city]);
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100">
      {error ? (
        <div className="text-red-500 text-center">
          <p>Error: {error}</p>
        </div>
      ) : (
        <>
          {!city && !current && !forecast && !loading && <>No city selected</>}
          {loading && (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            </div>
          )}
          {!loading && city && (
            <div className="flex items-center justify-center flex-col">
              <h2 className="text-2xl font-bold mb-4">Weather in {city}</h2>
              <ForecastCard size={"l"} data={current} />
              <ForecastWidget data={forecast} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
