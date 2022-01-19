import MapGL, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import React, { useMemo } from "react";
import {
  fullscreenControlStyle,
  geolocateStyle,
  navStyle,
  scaleControlStyle,
} from "../../constans/mapControls";

import { MAPBOX_TOKEN } from "../../constans/mapApi";
import { MarkerItem } from "../MarkerItem";
import { Wrapper } from "./styled";
import { mapInitial } from "../../constans/mapInitial";
import { mapsStyle } from "../../theme/mapTheme";
import { useState } from "react";

export const MapWrapper = ({ apiItems, isDarkTheme }) => {
  const [viewport, setViewport] = useState(mapInitial);

  return (
    <Wrapper>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={isDarkTheme ? mapsStyle.dark : mapsStyle.light}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {useMemo(
          () => apiItems?.map((item) => <MarkerItem key={item.id} {...item} />),
          [apiItems]
        )}
        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    </Wrapper>
  );
};
