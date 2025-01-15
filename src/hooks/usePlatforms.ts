import platforms from '../data/platforms';
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS  } from "../constants";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";


export interface Platform {
  id: number;
  name: string;
  slug: string; 
}

const usePlatforms = () => useQuery({
  queryKey: CACHE_KEY_PLATFORMS,
  queryFn: () =>  
    apiClient
    .get<FetchResponse<Platform>>('/platforms/lists/parent')
    .then(res => res.data),
  staleTime: 24 * 3600 * 1000, // 24 hours
  initialData: {count: platforms.length, results: platforms}
 });    


export default usePlatforms;