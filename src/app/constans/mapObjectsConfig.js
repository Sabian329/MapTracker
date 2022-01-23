//menu search buttons config
export const btnConfig = [
  { name: "Cars", endpoint: "VEHICLE", color: "#ff0000" },
  { name: "Parkings", endpoint: "PARKING", color: "#ff0000" },
  { name: "Points of Interest", endpoint: "POI", color: "#ff0000" },
  { name: "All", endpoint: "POI,VEHICLE,PARKING", color: "#ff0000" },
];
//marker pin colors config for every item
export const markerConfig = {
  parking: ["#a6000e", "#FF0000"],
  vehicle: ["#1CC900", "#22F500"],
  poi: ["#0075FF", "#0094FF"],
  cluster: ["#A30000", "#620008"],
};
//info box config to display full names
export const fullNamesConfig = {
  poi: "Point of Interest",
  parking: "Parking",
  vehicle: "Vechicle",
};
