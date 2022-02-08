import { MoonIcon, SunIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { setSatleite, switchTheme } from "../../Redux/slices/globalTheme";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Switch } from "@chakra-ui/react";
import { Wrapper } from "./styled";
import { selectTheme } from "../../Redux/selectors";

export const SwitchTheme = ({ colorTheme }) => {
  const themeStore = useSelector(selectTheme);
  const dispath = useDispatch();
  const switchThemeMode = (themeType) => {
    themeType
      ? dispath(switchTheme(!themeStore.isDarkTheme))
      : dispath(setSatleite(!themeStore.isSatelite));
  };

  return (
    <Wrapper>
      {colorTheme ? (
        <>
          <MoonIcon />
          <Switch size="lg" onChange={() => switchThemeMode(true)} />
          <SunIcon />
        </>
      ) : (
        <>
          <ViewOffIcon />
          <Switch size="lg" onChange={() => switchThemeMode(false)} />
          <ViewIcon />
        </>
      )}
    </Wrapper>
  );
};
