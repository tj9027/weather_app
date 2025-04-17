import React from "react";
import { useWeather } from "../store/weatherStore";

export const InputWidget = () => {
  const { city, setCity } = useWeather();


  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      city: { value: string };
    };
    const city = target.city.value;
    setCity(city);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
      <label className="text-gray-700 font-semibold mb-2">Check weather in: </label>
      <input className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none" name="city"type="text" maxLength={100} placeholder={"type city name here"}></input>
      </form>
    </div>
  );
};
