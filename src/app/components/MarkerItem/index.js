import { Marker } from "react-map-gl";
import { MarkerSvg } from "../../../assets/svg/MarkerSvg";
import React from "react";
import { useState } from "react/cjs/react.development";

export const MarkerItem = ({
  location,
  discriminator,
  isDarkTheme,
  setBoxId,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const SIZE = 50;
  return (
    <>
      <Marker
        longitude={location.longitude}
        latitude={location.latitude}
        onClick={() => setBoxId(id)}
      >
        <MarkerSvg
          SIZE={SIZE}
          name={discriminator}
          isDarkTheme={isDarkTheme}
          isOpen={isOpen}
        />
      </Marker>
    </>
  );
};
