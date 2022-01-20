import "mapbox-gl/dist/mapbox-gl.css";

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

import { InfoBox } from "../InfoBox";
import { MAPBOX_TOKEN } from "../../constans/mapApi";
import { MarkerItem } from "../MarkerItem";
import { Wrapper } from "./styled";
import { mapInitial } from "../../constans/mapInitial";
import { mapsStyle } from "../../theme/mapTheme";
import { useState } from "react";

export const MapWrapper = ({ apiItems, isDarkTheme }) => {
  const [viewport, setViewport] = useState(mapInitial);
  const [boxId, setBoxId] = useState("");

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
          () =>
            apiItems?.map((item) => (
              <MarkerItem
                isDarkTheme={isDarkTheme}
                setBoxId={setBoxId}
                key={item.id}
                {...item}
              />
            )),
          [apiItems, isDarkTheme]
        )}
        {useMemo(
          () =>
            boxId && (
              <InfoBox
                setBoxId={setBoxId}
                apiItems={apiItems.filter((item) => item.id.includes(boxId))}
              />
            ),
          [boxId]
        )}
        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    </Wrapper>
  );
};
