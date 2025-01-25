import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const seletedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) {
    return null;
  }

  if (isLoading)
    return (
      <>
        {skeletons.map((s) => (
          <HStack marginY="10px" height="32px" marginBottom="10px" key={s}>
            <Skeleton borderRadius="8px" width="42px" height="100%" />
            <Skeleton borderRadius="8px" width="100%" height="100%" />
          </HStack>
        ))}
      </>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom="3">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                borderRadius="8px"
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id == seletedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
