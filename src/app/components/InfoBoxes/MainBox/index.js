import { Button, Heading, Text } from "@chakra-ui/react";

import { AirfieldInfoBox } from "../AirfieldInfoBox";
import { BoxWrapper } from "./styled";
import { CarInfoBox } from "../CarInfoBox";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { fullNamesConfig } from "../../../constans/mapObjectsConfig";

export const MainBox = ({ apiItems, setActiveId }) => {
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
      {discriminator === "airfield" && <AirfieldInfoBox {...apiItems[0]} />}
      {discriminator === "parking" && (
        <Text fontSize="1.2rem" textAlign="center">{`${address?.city} ${
          address?.street
        } ${address?.house || ""}`}</Text>
      )}
      {/* if vehicle endpoint is searching additional data displays */}
      {discriminator === "vehicle" && <CarInfoBox {...apiItems[0]} />}
      <Text fontSize="0.8rem" textAlign="center">
        {convertedCords}
      </Text>
    </BoxWrapper>
  );
};
