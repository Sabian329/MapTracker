import React, { useEffect, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import { MapWrapper } from "../components/MapWrapper";
import { URL } from "../constans/apiMapConfig";
import { Wrapper } from "./styled";
import axios from "axios";
import { theme } from "../theme/chakraTheme";

export const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [apiItems, setApiItems] = useState([]);
  const [searchObject, setSearchObject] = useState("PARKING");

  useEffect(() => {
    axios
      .get(`${URL}${searchObject}`)
      .then((res) => {
        setApiItems(res.data.objects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchObject]);
  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setSearchObject={setSearchObject}
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          apiItems={apiItems}
          searchObject={searchObject}
        />
        <MapWrapper apiItems={apiItems} isDarkTheme={isDarkTheme} />
      </Wrapper>
    </ChakraProvider>
  );
};