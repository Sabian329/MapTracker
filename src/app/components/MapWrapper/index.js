import "mapbox-gl/dist/mapbox-gl.css";

import {
  MAPBOX_TOKEN,
  mapInitial,
  mapsStyle,
} from "../../constans/apiMapConfig";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";

import { HamburgerMenu } from "../HamburgerMenu";
import { MainBox } from "../InfoBoxes/MainBox";
import { MarkerItem } from "../MarkerItem";
import { Wrapper } from "./styled";
import { selectEndpoit, selectTheme } from "../../Redux/selectors";
import { useSelector } from "react-redux";

export const MapWrapper = ({ apiItems }) => {
  const [viewport, setViewport] = useState(mapInitial);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const themeStore = useSelector(selectTheme);
  const endpointStore = useSelector(selectEndpoit);

  const mapRef = useRef();

  // click on items list or cluster transfer to select point on map
  const onSelectCity = useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 14,
      transitionDuration: "auto",
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
    });
  }, []);
  const onSelectCityInit = useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 10,
      transitionDuration: "auto",
      transitionInterpolator: new FlyToInterpolator({ speed: 3 }),
    });
  }, []);

  useEffect(() => {
    apiItems.length &&
      onSelectCityInit({
        longitude: apiItems[0].location?.longitude,
        latitude: apiItems[0].location?.latitude,
      });
  }, [apiItems, onSelectCityInit]);

  return (
    <Wrapper>
      {useMemo(
        () => (
          <HamburgerMenu
            setIsMenuOpen={setIsMenuOpen}
            onSelectCity={onSelectCity}
            setActiveId={setActiveId}
            activeId={activeId}
            isMenuOpen={isMenuOpen}
            apiItems={apiItems}
          />
        ),
        [isMenuOpen, apiItems, activeId, onSelectCity, endpointStore.searching] // eslint-disable-line react-hooks/exhaustive-deps
      )}

      <ReactMapGL
        {...viewport}
        maxZoom={20}
        width="100vw"
        height="100vh"
        mapStyle={
          themeStore.isSatelite
            ? mapsStyle.satelite
            : themeStore.isDarkTheme
            ? mapsStyle.dark
            : mapsStyle.light
        }
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(newViewport) => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {useMemo(
          () => (
            <>
              {apiItems?.map((item, index) => (
                <MarkerItem
                  onSelectCity={onSelectCity}
                  key={index}
                  setActiveId={setActiveId}
                  activeId={activeId}
                  {...item}
                />
              ))}
              {activeId && (
                <MainBox
                  setActiveId={setActiveId}
                  apiItems={apiItems.filter((item) =>
                    item.id.includes(activeId)
                  )}
                />
              )}
            </>
          ),
          [activeId, apiItems] // eslint-disable-line react-hooks/exhaustive-deps
        )}
      </ReactMapGL>
    </Wrapper>
  );
};
