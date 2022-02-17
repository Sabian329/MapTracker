import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { MapWrapper } from "../components/MapWrapper";
import { URL } from "../constans/apiMapConfig";
import { Wrapper } from "./styled";
import axios from "axios";
import { theme } from "../theme/chakraTheme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectEndpoit } from "../Redux/selectors";

export const Root = () => {
  const [apiItems, setApiItems] = useState([]);
  const endpointStore = useSelector(selectEndpoit);

  useEffect(() => {
    axios
      .get(`${URL}${endpointStore.searching}`)
      .then((res) => {
        setApiItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpointStore.searching]);

  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        {useMemo(
          () => (
            <MapWrapper apiItems={apiItems} />
          ),
          [apiItems] // eslint-disable-line react-hooks/exhaustive-deps
        )}
      </Wrapper>
    </ChakraProvider>
  );
};
