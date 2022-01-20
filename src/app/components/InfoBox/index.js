import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Text,
} from "@chakra-ui/react";

import { CarInfobox } from "../CarInfoBox";
import { CloseIcon } from "@chakra-ui/icons";
import { Pin } from "./styled";
import React from "react";
import { fullNamesConfig } from "../../constans/mapObjectsConfig";

export const InfoBox = ({ apiItems, setBoxId }) => {
  const { name, discriminator, address } = apiItems[0];

  return (
    <Pin>
      <Button
        rightIcon={<CloseIcon />}
        colorScheme="blue"
        onClick={() => setBoxId("")}
      >
        Close
      </Button>
      <Heading>{name}</Heading>
      <Text textAlign="center">{fullNamesConfig[discriminator]}</Text>
      {discriminator === "parking" && (
        <Text textAlign="center">{`${address?.city} ${address?.street} ${
          address?.house || ""
        }`}</Text>
      )}
      {discriminator === "vehicle" && <CarInfobox {...apiItems[0]} />}
    </Pin>
  );
};
