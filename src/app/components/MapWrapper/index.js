import "mapbox-gl/dist/mapbox-gl.css";

import {
  MAPBOX_TOKEN,
  mapInitial,
  mapsStyle,
} from "../../constans/apiMapConfig";
import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";

import { HamburgerMenu } from "../HamburgerMenu";
import { InfoBox } from "../InfoBox";
import { MarkerItem } from "../MarkerItem";
import { Wrapper } from "./styled";
import { selectTheme } from "../../Redux/selectors";
import { useSelector } from "react-redux";
import useSupercluster from "use-supercluster";

export const MapWrapper = ({ apiItems, setSearchObject, searchObject }) => {
  const [viewport, setViewport] = useState(mapInitial);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const themeStore = useSelector(selectTheme);
  const mapRef = useRef();

  // click on items list or cluster transfer to select point on map
  const onSelectCity = useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 16,
      transitionDuration: "auto",
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
    });
  }, []);
  // add data to cluster object
  const points = apiItems?.map((item) => ({
    properties: {
      cluster: false,
      ...item,
    },
    geometry: {
      coordinates: [item.location.longitude, item.location.latitude],
    },
  }));

  const bounds =
    (mapRef.current && mapRef.current.getMap().getBounds().toArray().flat()) ||
    null;

  const { clusters } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 30, maxZoom: 20 },
  });

  return (
    <Wrapper>
      {useMemo(
        () => (
          <HamburgerMenu
            setSearchObject={setSearchObject}
            setIsMenuOpen={setIsMenuOpen}
            onSelectCity={onSelectCity}
            setActiveId={setActiveId}
            activeId={activeId}
            isMenuOpen={isMenuOpen}
            apiItems={apiItems}
            searchObject={searchObject}
          />
        ),
        [
          isMenuOpen,
          apiItems,
          activeId,
          searchObject,
          onSelectCity,
          setSearchObject,
        ]
      )}

      <ReactMapGL
        {...viewport}
        maxZoom={20}
        width="100vw"
        height="100vh"
        mapStyle={themeStore.isDarkTheme ? mapsStyle.dark : mapsStyle.light}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(newViewport) => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {useMemo(
          () => (
            <>
              {clusters.map((cluster, index) => (
                <MarkerItem
                  key={
                    cluster.properties.cluster ? index : cluster.properties.id
                  }
                  setActiveId={setActiveId}
                  activeId={activeId}
                  {...cluster}
                />
              ))}
              {activeId && (
                <InfoBox
                  setActiveId={setActiveId}
                  apiItems={apiItems.filter((item) =>
                    item.id.includes(activeId)
                  )}
                />
              )}
            </>
          ),
          [activeId, apiItems, clusters?.length] // eslint-disable-line react-hooks/exhaustive-deps
        )}
      </ReactMapGL>
    </Wrapper>
  );
};
