import "mapbox-gl/dist/mapbox-gl.css";

import { MAPBOX_TOKEN, mapInitial } from "../../constans/apiMapConfig";
import MapGL, { FlyToInterpolator } from "react-map-gl";
import React, { useCallback, useMemo } from "react";

import { HamburgerMenu } from "../HamburgerMenu";
import { InfoBox } from "../InfoBox";
import { MarkerItem } from "../MarkerItem";
import { Wrapper } from "./styled";
import { mapsStyle } from "../../theme/mapTheme";
import { useState } from "react";

export const MapWrapper = ({ apiItems, setSearchObject, searchObject }) => {
  const [viewport, setViewport] = useState(mapInitial);
  const [boxId, setBoxId] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSelectCity = useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 17,
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
      transitionDuration: "auto",
    });
  }, []);

  const menuProps = {
    isMenuOpen,
    setIsMenuOpen,
    setSearchObject,
    apiItems,
    searchObject,
    onSelectCity,
    setBoxId,
    boxId,
  };
  return (
    <Wrapper>
      {useMemo(
        () => (
          <HamburgerMenu {...menuProps} />
        ),
        [menuProps]
      )}

      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={mapsStyle.dark}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {useMemo(
          () =>
            apiItems?.map((item) => (
              <MarkerItem
                setBoxId={setBoxId}
                boxId={boxId}
                key={item.id}
                {...item}
              />
            )),
          [apiItems, boxId]
        )}
        {useMemo(
          () =>
            boxId && (
              <InfoBox
                setBoxId={setBoxId}
                apiItems={apiItems.filter((item) => item.id.includes(boxId))}
              />
            ),
          [boxId, apiItems]
        )}
      </MapGL>
    </Wrapper>
  );
};
