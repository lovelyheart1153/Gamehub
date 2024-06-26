import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
   gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
   const { data: games, error, isLoading } = useGames(gameQuery);
   const skeletons = [...Array(11).keys()];

   if (error) return error && <Text>{error}</Text>;

   return (
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
   );
};

export default GameGrid;
