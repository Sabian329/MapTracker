import "mapbox-gl/dist/mapbox-gl.css";

import { Map, Wrapper } from "./styled";
import mapboxgl, { Popup } from "mapbox-gl";
import { mapsStyle, mapsToken } from "../../constans/mapsApi";
import { useEffect, useRef } from "react";

import React from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";

mapboxgl.accessToken = mapsToken;

export const MapWrapper = () => {
  const [items, setItems] = useState("");
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = new mapboxgl.Marker({
    color: "#c4c4c4",
  });

  const popup = new mapboxgl.Popup();
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapsStyle.dark,
      center: [20, 52],
      minZoom: 3,
      zoom: 5,
      hash: true,
    });
    axios
      .get(`https://dev.vozilla.pl/api-client-portal/map?objectType=POI`)
      .then((res) => {
        setItems(res.data.objects);
        res?.data.objects.map((item) => {
          new mapboxgl.Marker({
            color: "#c4c4c4",
          })
            .setLngLat([item.location.longitude, item.location.latitude])
            .setPopup(new mapboxgl.Popup().setHTML(<div>helos</div>))
            .addTo(map.current);
        });
      });
  });

  return (
    <Wrapper>
      <Map ref={mapContainer} className="map-container" />
    </Wrapper>
  );
};
