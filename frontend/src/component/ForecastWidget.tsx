import { ForecastCard } from "./ForecastCard";

export const ForecastWidget = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) {
    return <div className="text-gray-500">No data available</div>;
  }

  return (
    <div className="p-6">
      <div className="flex items-start overflow-x-auto gap-4">
        {data.map((item, indx) => (
          <ForecastCard key={indx} size={"s"} data={item} />
        ))}
      </div>
    </div>
  );
};
