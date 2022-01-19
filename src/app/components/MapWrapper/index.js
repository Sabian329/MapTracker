import "mapbox-gl/dist/mapbox-gl.css";

import MapGL, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import React, { useEffect } from "react";
import { mapsStyle, mapsToken } from "../../constans/mapsApi";

import { MarkerItem } from "../MarkerItem";
import axios from "axios";
import { useState } from "react";

const MAPBOX_TOKEN = mapsToken;

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};
export const MapWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 52,
    longitude: 20,
    zoom: 4,
    bearing: 0,
    pitch: 0,
  });
  const [apiItems, setApiItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dev.vozilla.pl/api-client-portal/map?objectType=POI`)
      .then((res) => {
        console.log(res.data.objects);
        setApiItems(res.data.objects);
      });
  }, []);

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle={mapsStyle.dark}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {apiItems?.map((item) => (
        <MarkerItem isOpen={isOpen} setIsOpen={setIsOpen} {...item} />
      ))}
      <GeolocateControl style={geolocateStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle} />
      <ScaleControl style={scaleControlStyle} />
    </MapGL>
  );
};
