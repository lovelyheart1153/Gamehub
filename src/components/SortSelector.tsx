import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
   sortOrder: string;
   onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
   const sortOrders: { value: string; label: string }[] = [
      { value: "", label: "Relevance" },
      { value: "-added", label: "Date Added" },
      { value: "name", label: "Name" },
      { value: "-released", label: "Release Date" },
      { value: "-metacritic", label: "Popularity" },
      { value: "-rating", label: "Average Rating" },
   ];

   const orderBy = sortOrders.find((order) => order.value === sortOrder);

   return (
      <Menu>
         <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: {orderBy?.label || "Relevance"}
         </MenuButton>
         <MenuList>
            {sortOrders.map((sortOrder) => (
               <MenuItem
                  onClick={() => onSelectSortOrder(sortOrder.value)}
                  key={sortOrder.label}
               >
                  {sortOrder.label}
               </MenuItem>
            ))}
         </MenuList>
      </Menu>
   );
};

export default SortSelector;
