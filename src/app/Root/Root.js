import React, { useEffect, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { MapWrapper } from "../components/MapWrapper";
import { URL } from "../constans/apiMapConfig";
import { Wrapper } from "./styled";
import axios from "axios";
import { theme } from "../theme/chakraTheme";

export const Root = () => {
  const [apiItems, setApiItems] = useState([]);
  const [searchObject, setSearchObject] = useState("PARKING");

  // useEffect(() => {
  //   axios
  //     .get(`${URL}${searchObject}`)
  //     .then((res) => {
  //       setApiItems(res.data.objects);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [searchObject]);
  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        <MapWrapper
          setSearchObject={setSearchObject}
          searchObject={searchObject}
          apiItems={apiItems}
        />
      </Wrapper>
    </ChakraProvider>
  );
};
