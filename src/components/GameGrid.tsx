import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
   const { games, error, isLoading } = useGames();
   const skeletons = [...Array(11).keys()];

   console.log(isLoading);

   return (
      <>
         {error && <Text>{error}</Text>}
         <SimpleGrid
            columns={{
               sm: 1,
               md: 2,
               lg: 2,
               xl: 3,
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
