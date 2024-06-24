import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
   const { data: genres, error, isLoading } = useGenres();
   console.log(genres);

   return (
      <List>
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
