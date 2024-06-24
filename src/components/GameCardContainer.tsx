import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
   children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
   return (
      <Card height="400px" width="400px" borderRadius={8} overflow="hidden">
         {children}
      </Card>
   );
};

export default GameCardContainer;
