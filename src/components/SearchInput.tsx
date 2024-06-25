import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
   onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
   const ref = useRef<HTMLInputElement>(null);
   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
   }
   return (
      <form onSubmit={handleSubmit}>
         <InputGroup>
            <InputLeftElement>
               <BsSearch />
            </InputLeftElement>
            <Input
               borderRadius={20}
               placeholder="Search games..."
               variant="filled"
               ref={ref}
            />
         </InputGroup>
      </form>
   );
};

export default SearchInput;
