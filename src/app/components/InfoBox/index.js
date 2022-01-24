import { Button, Heading, Text } from "@chakra-ui/react";

import { BoxWrapper } from "./styled";
import { CarInfobox } from "../CarInfoBox";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { fullNamesConfig } from "../../constans/mapObjectsConfig";

export const InfoBox = ({ apiItems, setActiveId }) => {
  const { name, discriminator, address, location } = apiItems[0];

  //geoCord library convert coordinates from degrees to Degrees Minutes Seconds

  const { GeoCoord } = require("geo-coord");
  const cords = new GeoCoord(location?.latitude, location?.longitude).toDMS();
  const convertedCords = new GeoCoord({
    latitude: cords?.latitude,
    longitude: cords?.longitude,
  })
    .roundToSeconds()
    .toString();

  return (
    <BoxWrapper>
      <Button
        rightIcon={<CloseIcon />}
        colorScheme="blue"
        onClick={() => setActiveId("")}
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
      {/* if vehicle endpoint is searching additional data displays */}
      {discriminator === "vehicle" && <CarInfobox {...apiItems[0]} />}
      <Text fontSize="0.8rem" textAlign="center">
        {convertedCords}
      </Text>
    </BoxWrapper>
  );
};
