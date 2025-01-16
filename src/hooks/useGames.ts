import { GameQuery } from "../App";
import { Platform } from './usePlatforms';
import { CACHE_KEY_GAMES } from "../constants";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, {FetchResponse} from "../services/api-client";

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: [CACHE_KEY_GAMES, gameQuery],
  queryFn: ({pageParam = 1}) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search,
        page: pageParam
      }
    } 
  ), 
  keepPreviousData: true,
  getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
  staleTime: 24 * 60 * 60 * 1000

 });    


export default useGames;