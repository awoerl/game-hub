import platforms from '../data/platforms';
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS  } from "../constants";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string; 
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

console.log(apiClient.getAll());

const usePlatforms = () => useQuery({
  queryKey: CACHE_KEY_PLATFORMS,
  queryFn: apiClient.getAll,
  staleTime: 24 * 3600 * 1000, // 24 hours
 });    


export default usePlatforms;