import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
   selectedGenre: Genre | null;
   selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
   const {
      data: games,
      error,
      isLoading,
   } = useGames(selectedGenre, selectedPlatform);
   const skeletons = [...Array(11).keys()];

   return (
      <>
         {error && <Text>{error}</Text>}
         <SimpleGrid
            columns={{
               sm: 1,
               md: 2,
               lg: 2,
               xl: 3,
               "2xl": 5,
            }}
            spacing={8}
            p="15px"
         >
            {isLoading &&
               skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

            {games.map((game) => (
               <GameCard key={game.id} game={game} />
            ))}
         </SimpleGrid>
      </>
   );
};

export default GameGrid;
