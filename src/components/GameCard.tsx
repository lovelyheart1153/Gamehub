import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
   game: Game;
}

const GameCard = ({ game }: Props) => {
   return (
      <Card height="400px" borderRadius={8} overflow="hidden">
         <Box height="230px">
            <Image
               src={getCroppedImageUrl(game.background_image)}
               height="100%"
               width="100%"
               objectFit="cover"
            />
         </Box>
         <CardBody>
            <HStack justifyContent="space-between" marginY={3}>
               <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
               />
               <CriticScore score={game.metacritic} />
            </HStack>

            <Heading fontSize="2xl">{game.name}</Heading>
         </CardBody>
      </Card>
   );
};

export default GameCard;
