import { extendTheme } from "@chakra-ui/react";

//chakra global styles
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#2b2b2b",
        color: "white",
        overflow: "hidden",
      },
    },
  },
});
