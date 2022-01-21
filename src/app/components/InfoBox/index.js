import { Button, Heading, Text } from "@chakra-ui/react";

import { CarInfobox } from "../CarInfoBox";
import { CloseIcon } from "@chakra-ui/icons";
import { Pin } from "./styled";
import React from "react";
import { fullNamesConfig } from "../../constans/mapObjectsConfig";

export const InfoBox = ({ apiItems, setBoxId }) => {
  const { name, discriminator, address, location } = apiItems[0];

  const { GeoCoord } = require("geo-coord");

  const cords = new GeoCoord(location?.latitude, location?.longitude).toDMS();

  const convertedCords = new GeoCoord({
    latitude: cords?.latitude,
    longitude: cords?.longitude,
  })
    .roundToSeconds()
    .toString();

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
      <Text color="#c4c4c4" textAlign="center">
        {fullNamesConfig[discriminator]}
      </Text>

      {discriminator === "parking" && (
        <Text fontSize="1.2rem" textAlign="center">{`${address?.city} ${
          address?.street
        } ${address?.house || ""}`}</Text>
      )}
      {discriminator === "vehicle" && <CarInfobox {...apiItems[0]} />}
      <Text fontSize="0.8rem" textAlign="center">
        {convertedCords}
      </Text>
    </Pin>
  );
};
