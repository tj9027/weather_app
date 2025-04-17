import { Config } from "../config";
import axios from "axios";
import { LocationType } from "../types/location.type";

const instance = axios.create({
  baseURL: Config.location.apiUrl,
  timeout: 4000,
  headers: {},
  params: {
    appid: Config.location.apiKey,
  },
});

const getCoordinates = async (
  city: string
): Promise<[LocationType[] | null, any | null]> => {
  try {
    const response = await instance.get("/1.0/direct", {
      params: {
        q: city,
        limit: 1,
      },
    });
    const data: LocationType[] = response.data;

    return [data, null];
  } catch (error: any) {
    console.error(
      "Error fetching coordinates:",
      error?.response?.data || error?.message
    );

    return [null, error];
  }
};

export { getCoordinates };
