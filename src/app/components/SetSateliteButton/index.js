import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { selectTheme } from "../../Redux/selectors";
import { setSatleite } from "../../Redux/slices/globalTheme";

export const SetSatleiteButton = () => {
  const themeStore = useSelector(selectTheme);
  const dispath = useDispatch();

  const toogleSatelite = () => dispath(setSatleite(!themeStore.isSatelite));

  return (
    <div>
      <IconButton
        colorScheme="blue"
        onClick={() => toogleSatelite()}
        aria-label="Search database"
        icon={<SearchIcon />}
      />
    </div>
  );
};
