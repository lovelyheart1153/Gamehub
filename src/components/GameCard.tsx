import { CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import GameCardImageContainer from "./GameCardImageContainer";

interface Props {
   game: Game;
}

const GameCard = ({ game }: Props) => {
   return (
      <GameCardContainer>
         <GameCardImageContainer>
            <Image
               src={getCroppedImageUrl(game.background_image)}
               height="100%"
               width="100%"
               objectFit="cover"
            />
         </GameCardImageContainer>
         <CardBody>
            <HStack justifyContent="space-between" marginY={3}>
               <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
               <CriticScore score={game.metacritic} />
            </HStack>

            <Heading fontSize="2xl">{game.name}</Heading>
         </CardBody>
      </GameCardContainer>
   );
};

export default GameCard;
