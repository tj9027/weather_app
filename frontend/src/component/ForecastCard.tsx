import React from "react";
import { format, isToday } from "date-fns";
import {
  Sun,
  CloudRain,
  Cloud,
  CloudSnow,
  Zap,
  CloudDrizzle,
  CloudFog,
  Thermometer,
} from "lucide-react";

const sizeClasses = {
  s: "max-w-xs p-4",
  m: "max-w-sm p-6",
  l: "max-w-md p-8",
};

const weatherIconMap: Record<string, React.ReactNode> = {
  Clear: <Sun className="w-6 h-6 text-yellow-500" />,
  Rain: <CloudRain className="w-6 h-6 text-blue-500" />,
  Clouds: <Cloud className="w-6 h-6 text-gray-400" />,
  Snow: <CloudSnow className="w-6 h-6 text-blue-300" />,
  Thunderstorm: <Zap className="w-6 h-6 text-purple-600" />,
  Drizzle: <CloudDrizzle className="w-6 h-6 text-blue-400" />,
  Fog: <CloudFog className="w-6 h-6 text-gray-300" />,
  Mist: <CloudFog className="w-6 h-6 text-gray-300" />,
  Haze: <CloudFog className="w-6 h-6 text-gray-300" />,
  Default: <Thermometer className="w-6 h-6 text-gray-500" />,
};

export const ForecastCard = ({
  size = "s",
  data,
}: {
  size: string;
  data: any;
}) => {
  if (!data) {
    return <div className="text-gray-500">No data available</div>;
  }
  return (
    <div
      className={`bg-white border min-w-36 border-gray-200 rounded-xl shadow-md ${
        sizeClasses[size as keyof typeof sizeClasses]
      }`}
    >
      {weatherIconMap[data.weather[0]?.main] || weatherIconMap["Default"]}
      <br/>
      <div className="text-gray-600 text-sm">
        <p>{data.weather[0]?.description}</p>
        <p>{data.main.temp}°C</p>
        <br className="border-1" />
        <p className="text-xs italic">
          {isToday(data.timestamp)
            ? "Today"
            : format(new Date(data.timestamp), "do MMM yyyy")}
        </p>
      </div>
    </div>
  );
};
