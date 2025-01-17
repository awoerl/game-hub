import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES  } from "../constants";
import APIClient from "../services/api-client";
import genres from '../data/genres'
import ms from 'ms';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: CACHE_KEY_GENRES,
  queryFn: () =>  apiClient.getAll(),
  staleTime: ms('24h'),
  initialData: genres,
 });    

export default useGenres;