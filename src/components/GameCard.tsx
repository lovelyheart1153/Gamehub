import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
         </CardBody>
      </Card>
   );
};

export default GameCard;
