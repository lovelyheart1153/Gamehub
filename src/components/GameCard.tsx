import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
   game: Game;
}

const GameCard = ({ game }: Props) => {
   return (
      <Card height="400px" borderRadius={8} overflow="hidden">
         <Box height="230px">
            <Image
               src={game.background_image}
               height="100%"
               width="100%"
               objectFit="cover"
            />
         </Box>
         <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
         </CardBody>
      </Card>
   );
};

export default GameCard;
