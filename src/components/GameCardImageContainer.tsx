import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
   children: ReactNode;
}

const GameCardImageContainer = ({ children }: Props) => {
   return <Box height="230px">{children}</Box>;
};

export default GameCardImageContainer;
