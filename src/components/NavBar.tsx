import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
   return (
      <HStack justifyContent="space-between" p="10px">
         <Image src={logo} boxSize="50px" />
         <ColorModeSwitch />
      </HStack>
   );
};

export default NavBar;
