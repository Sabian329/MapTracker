import { ChakraProvider} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { MapWrapper } from "../components/MapWrapper";
import { URL } from "../constans/apiMapConfig";
import { Wrapper } from "./styled";
import axios from "axios";
import { theme } from "../theme/chakraTheme";
import { useMemo } from "react";

export const Root = () => {
  const [apiItems, setApiItems] = useState([]);
  const [searchObject, setSearchObject] = useState("POI");


  useEffect(() => {
    axios
      .get(`${URL}${searchObject}`)
      .then((res) => {
        setApiItems(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchObject]);

  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        {useMemo(
          () => (
            <MapWrapper
              setSearchObject={setSearchObject}
              searchObject={searchObject}
              apiItems={apiItems}
            />
          ),
          [apiItems] // eslint-disable-line react-hooks/exhaustive-deps
        )}
      </Wrapper>
    </ChakraProvider>
  );
};
