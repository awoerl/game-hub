import { Platform } from './usePlatforms';
import { CACHE_KEY_GAMES } from "../constants";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, {FetchResponse} from "../services/api-client";
import ms from 'ms';
import useGameQueryStore from "../store";
const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      } 
    ), 
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms('24h')
  
   });    
  
}


export default useGames;