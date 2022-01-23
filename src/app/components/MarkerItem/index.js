import React, { useEffect } from "react";

import { Marker } from "react-map-gl";
import { MarkerSvg } from "../../../assets/svg/MarkerSvg";
import { SIZE } from "../../constans/apiMapConfig";
import { useState } from "react/cjs/react.development";

export const MarkerItem = ({
  setActiveId,
  activeId,
  geometry,
  properties,
  onSelectCity,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [longitude, latitude] = geometry.coordinates;
  const { name, cluster, point_count, id, discriminator } = properties;

  useEffect(
    () => (activeId !== id ? setIsOpen(false) : setIsOpen(true)),
    [activeId, id]
  );
  const toggleMarker = () => {
    setActiveId(id);
    setIsOpen(true);
    cluster &&
      onSelectCity({
        longitude: longitude,
        latitude: latitude,
      });
  };

  return (
    <>
      <Marker
        longitude={longitude}
        latitude={latitude}
        onClick={() => toggleMarker()}
      >
        <MarkerSvg
          cluster={cluster}
          SIZE={SIZE}
          disc={discriminator}
          name={name}
          isOpen={isOpen}
          pointCount={point_count}
        />
      </Marker>
    </>
  );
};
