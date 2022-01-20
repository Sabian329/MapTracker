import "mapbox-gl/dist/mapbox-gl.css";

import {
  MAPBOX_TOKEN,
  fullscreenControlStyle,
  geolocateStyle,
  mapInitial,
  navStyle,
  scaleControlStyle,
} from "../../constans/apiMapConfig";
import MapGL, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import React, { useMemo } from "react";

import { InfoBox } from "../InfoBox";
import { MarkerItem } from "../MarkerItem";
import { Wrapper } from "./styled";
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
                boxId={boxId}
                key={item.id}
                {...item}
              />
            )),
          [apiItems, isDarkTheme, boxId]
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
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    </Wrapper>
  );
};
