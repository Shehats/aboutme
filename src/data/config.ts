import { Config } from "../models";
import { getJson } from "./utils";

export const getConfigs = async (baseUrl: string, branch: string, path: string): Promise<Config> => {
  const url = `${baseUrl}/${branch}/${path}`;
  const config = await getJson<Config>(url);
  return config;
};
