import { Marker, Popup } from "react-map-gl";

import { MarkerSvg } from "../../../assets/svg/MarkerSvg";
import React from "react";
import { Text } from "@chakra-ui/react";
import { useState } from "react/cjs/react.development";

const SIZE = 40;
export const MarkerItem = ({ location, name }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          anchor="top"
          longitude={location.longitude}
          latitude={location.latitude}
          closeOnClick={false}
          onClose={setIsOpen}
        >
          <Text color="black"> {name}</Text>
        </Popup>
      )}
    </>
  );
};
