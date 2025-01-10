import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  if (error) {
    return null;
  }

  if (isLoading)
    return skeletons.map((s) => (
      <HStack marginY="10px" height="32px" marginBottom="10px">
        <Skeleton borderRadius="8px" width="42px" height="100%" />
        <Skeleton borderRadius="8px" width="100%" height="100%" />
      </HStack>
    ));

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px">
          <HStack>
            <Image
              borderRadius="8px"
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
