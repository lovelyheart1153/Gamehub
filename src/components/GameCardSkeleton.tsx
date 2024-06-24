import { CardBody, HStack, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import GameCardImageContainer from "./GameCardImageContainer";

const GameCardSkeleton = () => {
   return (
      <GameCardContainer>
         <GameCardImageContainer>
            <Skeleton height="100%" width="100%" />
         </GameCardImageContainer>
         <CardBody>
            <HStack justifyContent="space-between" marginY={3}>
               <HStack>
                  <SkeletonCircle size="5" />
                  <SkeletonCircle size="5" />
                  <SkeletonCircle size="5" />
                  <SkeletonCircle size="5" />
               </HStack>
               <Skeleton height="30px" width="40px" borderRadius="5px" />
            </HStack>

            <Skeleton height="20px" marginY={3} />
            <Skeleton height="20px" />
         </CardBody>
      </GameCardContainer>
   );
};

export default GameCardSkeleton;
