import {
   Button,
   Heading,
   HStack,
   Image,
   List,
   ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
   selectedGenre: Genre | null;
   onSelectGenre: (selectedGenre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
   const { data: genres, error, isLoading } = useGenres();
   const skeletons = [...Array(20).keys()];

   if (error) return null;

   return (
      <>
         <Heading my={2} fontSize="2xl">
            Genres
         </Heading>
         <List>
            {isLoading &&
               skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
            {genres.map((genre) => (
               <ListItem key={genre.id} paddingY={2}>
                  <HStack>
                     <Image
                        boxSize="32px"
                        src={genre.image_background}
                        borderRadius={5}
                        objectFit="cover"
                     />
                     <Button
                        fontWeight={
                           genre.id === selectedGenre?.id ? "bold" : "normal"
                        }
                        onClick={() => onSelectGenre(genre)}
                        variant="link"
                        fontSize="lg"
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
