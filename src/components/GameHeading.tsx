import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import Foo from "../api/Foo";
import Platform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = Platform.getPlatform(gameQuery.platformId);

  const title = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize="5xl" as="h1">
      {title}
    </Heading>
  );
};

export default GameHeading;
