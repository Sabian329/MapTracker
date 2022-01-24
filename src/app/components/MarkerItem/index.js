import React, { useEffect } from "react";

import { Marker } from "react-map-gl";
import { MarkerSvg } from "../../../assets/svg/MarkerSvg";
import { SIZE } from "../../constans/apiMapConfig";
import { useState } from "react/cjs/react.development";

export const MarkerItem = ({ setActiveId, activeId, geometry, properties }) => {
  const [isActive, setIsActive] = useState(false);
  const [longitude, latitude] = geometry.coordinates;
  const { name, cluster, point_count, id, discriminator } = properties;

  useEffect(
    () => (activeId !== id ? setIsActive(false) : setIsActive(true)),
    [activeId, id]
  );

  const toggleMarker = () => {
    setActiveId(id);
    setIsActive(true);
  };

  return (
    <div onClick={() => toggleMarker()}>
      <Marker longitude={longitude} latitude={latitude}>
        <MarkerSvg
          cluster={cluster}
          SIZE={SIZE}
          disc={discriminator}
          name={name}
          isActive={isActive}
          pointCount={point_count}
        />
      </Marker>
    </div>
  );
};
