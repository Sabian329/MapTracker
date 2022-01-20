//map library token
export const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2FiaWFuMzI5IiwiYSI6ImNreWsxZm4zaTBkajYyb256MDBjZmowZHIifQ.Ocwxt2FBew7hQlRkz7h_eA";

//api object url
export const URL = "https://dev.vozilla.pl/api-client-portal/map?objectType=";

//pin size config
export const SIZE = 50;

//map controls config
export const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

export const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

export const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

export const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

//initial map state
export const mapInitial = {
  latitude: 51.11057,
  longitude: 17.044326,
  zoom: 10,
  bearing: 0,
  pitch: 0,
  minZoom: 3,
};
