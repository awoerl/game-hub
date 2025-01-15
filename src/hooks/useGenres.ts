import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES  } from "../constants";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: CACHE_KEY_GENRES,
  queryFn: () =>  apiClient.getAll(),
  staleTime: 24 * 3600 * 1000, // 24 hours
    initialData: {count: genres.length, results: genres}
 });    


export default useGenres;