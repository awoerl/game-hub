import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import Platform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenredId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenredId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const platform = Platform.getPlatform(selectedPlatformId);

  const title = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize="5xl" as="h1">
      {title}
    </Heading>
  );
};

export default GameHeading;
