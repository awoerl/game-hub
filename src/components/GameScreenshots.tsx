import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  if (!data?.results) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} padding="10px">
      {data.results.map((screen) => (
        <Image key={screen.id} src={screen.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
