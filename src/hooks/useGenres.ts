import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES  } from "../constants";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: CACHE_KEY_GENRES,
  queryFn: () =>  apiClient
  .get<FetchResponse<Genre>>('/genres')
  .then(res => res.data),
  staleTime: 24 * 3600 * 1000, // 24 hours
    initialData: {count: genres.length, results: genres}
 });    


export default useGenres;