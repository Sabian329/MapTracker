import { Marker, Popup } from "react-map-gl";

import { MarkerSvg } from "../../../assets/svg/MarkerSvg";
import React from "react";
import { Text } from "@chakra-ui/react";
import { useState } from "react/cjs/react.development";

export const MarkerItem = ({ location, name, discriminator }) => {
  const [isOpen, setIsOpen] = useState(false);
  const SIZE = 40;
  return (
    <>
      <Marker
        longitude={location.longitude}
        latitude={location.latitude}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MarkerSvg SIZE={SIZE} />
      </Marker>
      {isOpen && (
        <Popup
          tipSize={5}
          anchor="bottom"
          longitude={location.longitude}
          latitude={location.latitude}
          closeOnClick={true}
          onClose={() => setIsOpen(false)}
          altitude={10}
        >
          <>
            <Text zIndex={120} color="black">
              {discriminator}
            </Text>
          </>
        </Popup>
      )}
    </>
  );
};
