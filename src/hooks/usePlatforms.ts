import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS  } from "../constants";
import APIClient from "../services/api-client";
import platforms from '../data/platforms';
import ms from 'ms';
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
  queryKey: CACHE_KEY_PLATFORMS,
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: platforms,
 });   

export default usePlatforms;