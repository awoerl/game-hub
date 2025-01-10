import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSort: (sort?: string | null) => void;
  selectedSort: string | null;
}

const SortSelector = ({ onSort, selectedSort }: Props) => {
  const sortings = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSort ? selectedSort : "Sort"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSort()} key={0}>
          Unsorted
        </MenuItem>
        {sortings.map((sorting) => (
          <MenuItem onClick={() => onSort(sorting)} key={sorting}>
            {sorting}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
