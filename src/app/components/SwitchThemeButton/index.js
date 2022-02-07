import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Switch } from "@chakra-ui/react";
import { Wrapper } from "./styled";
import { selectTheme } from "../../Redux/selectors";
import { switchTheme } from "../../Redux/slices/globalTheme";

export const SwitchThemeButton = () => {
  const themeStore = useSelector(selectTheme);
  const dispath = useDispatch();
  const switchThemeMode = () => dispath(switchTheme(!themeStore.isDarkTheme));
  return (
    <Wrapper>
      <MoonIcon />
      <Switch size="lg" onChange={() => switchThemeMode()} />
      <SunIcon />
    </Wrapper>
  );
};
