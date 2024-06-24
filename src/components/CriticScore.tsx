import { Badge } from "@chakra-ui/react";

interface Props {
   score: number;
}

const CriticScore = ({ score }: Props) => {
   const colorScheme = score > 75 ? "green" : score > 60 ? "yellow" : "";

   return (
      <Badge
         colorScheme={colorScheme}
         fontSize="16px"
         paddingX={3}
         borderRadius="5px"
      >
         {score}
      </Badge>
   );
};

export default CriticScore;
