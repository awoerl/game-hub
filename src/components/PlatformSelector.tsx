import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import CSPlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = usePlatforms();
  const selectedPlatform = CSPlatform.getPlatform(selectedPlatformId || 0);

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => selectPlatformId()} key={0}>
          All Platforms
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => selectPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
