import {
   Box,
   Card,
   CardBody,
   HStack,
   Skeleton,
   SkeletonCircle,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
   return (
      <Card height="400px" width="400px" borderRadius={8} overflow="hidden">
         <Box height="230px">
            <Skeleton height="100%" width="100%" />
         </Box>
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
      </Card>
   );
};

export default GameCardSkeleton;
