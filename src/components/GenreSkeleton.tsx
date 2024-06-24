import { HStack, ListItem, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
   return (
      <ListItem paddingY={2}>
         <HStack>
            <Skeleton boxSize="32px" />
            <Skeleton height="20px" width="120px" />
         </HStack>
      </ListItem>
   );
};

export default GenreSkeleton;
