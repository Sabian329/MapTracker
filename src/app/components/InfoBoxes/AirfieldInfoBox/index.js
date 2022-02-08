import { Image, Text } from "@chakra-ui/react";

import React from "react";
import { Wrapper } from "./styled";

export const AirfieldInfoBox = ({ freq, elevation, runways, photo }) => {
  return (
    <Wrapper>
      <Text>{`Radio : ${freq}`}</Text>
      <Text>{`Elevation : ${elevation}`}</Text>
      <Text>{`RWY : ${runways}`}</Text>

      <Image boxSize="150px" src={photo} />
    </Wrapper>
  );
};
