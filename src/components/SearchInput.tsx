import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
   return (
      <InputGroup>
         <InputLeftElement>
            <BsSearch />
         </InputLeftElement>
         <Input
            borderRadius={5}
            placeholder="Search games..."
            variant="filled"
         />
      </InputGroup>
   );
};

export default SearchInput;
