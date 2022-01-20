import React, { useEffect } from "react";

import { Marker } from "react-map-gl";
import { MarkerSvg } from "../../../assets/svg/MarkerSvg";
import { SIZE } from "../../constans/apiMapConfig";
import { useState } from "react/cjs/react.development";

export const MarkerItem = ({
  location,
  discriminator,
  isDarkTheme,
  setBoxId,
  id,
  boxId,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => boxId !== id && setIsOpen(false), [boxId]);
  const toggleMarker = () => {
    setBoxId(id);
    setIsOpen(true);
  };

  return (
    <>
      <Marker
        longitude={location.longitude}
        latitude={location.latitude}
        onClick={() => toggleMarker()}
      >
        <MarkerSvg
          SIZE={SIZE}
          disc={discriminator}
          name={name}
          isDarkTheme={isDarkTheme}
          isOpen={isOpen}
        />
      </Marker>
    </>
  );
};
