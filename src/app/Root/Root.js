import { ChakraProvider } from "@chakra-ui/react";
import { MapWrapper } from "../components/MapWrapper";
import React from "react";
import { theme } from "../theme/chakraTheme";

export const Root = () => {
  return (
    <ChakraProvider theme={theme}>
      <MapWrapper />
    </ChakraProvider>
  );
};
