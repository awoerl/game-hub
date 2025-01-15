import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES  } from "../constants";
import {Genre} from "../services/genreService";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import apiClient from "../services/api-client";


const useGenres = () => useQuery({
  queryKey: CACHE_KEY_GENRES,
  queryFn: () =>  apiClient
  .get<FetchResponse<Genre>>('/genres')
  .then(res => res.data),
  staleTime: 24 * 3600 * 1000, // 24 hours
    initialData: {count: genres.length, results: genres}
 });    


export default useGenres;