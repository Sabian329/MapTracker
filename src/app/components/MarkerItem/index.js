import React, { useEffect, useState } from "react";

import { Marker } from "react-map-gl";
import { MarkerSvg } from "../../../assets/svg/MarkerSvg";

export const MarkerItem = ({
  name,
  discriminator,
  location,
  setActiveId,
  activeId,
  id,
  onSelectCity,
}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(
    () => (activeId !== id ? setIsActive(false) : setIsActive(true)),
    [activeId, id]
  );
  const toggleMarker = () => {
    setActiveId(id);
    onSelectCity({
      longitude: location.longitude,
      latitude: location.latitude,
    });
  };
  return (
    <div onClick={() => toggleMarker()}>
      <Marker longitude={location?.longitude} latitude={location?.latitude}>
        <MarkerSvg
          SIZE={45}
          disc={discriminator}
          name={name}
          isActive={isActive}
        />
      </Marker>
    </div>
  );
};
