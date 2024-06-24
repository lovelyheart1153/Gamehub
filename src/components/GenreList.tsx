import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
   const { data: genres, error, isLoading } = useGenres();
   const skeletons = [...Array(20).keys()];

   if (error) return null;

   return (
      <List>
         {isLoading && skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
         {genres.map((genre) => (
            <ListItem key={genre.id} paddingY={2}>
               <HStack>
                  <Image
                     boxSize="32px"
                     src={genre.image_background}
                     borderRadius={5}
                     objectFit="cover"
                  />
                  <Text fontSize="lg">{genre.name}</Text>
               </HStack>
            </ListItem>
         ))}
      </List>
   );
};

export default GenreList;
