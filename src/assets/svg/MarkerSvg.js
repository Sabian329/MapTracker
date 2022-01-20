import React from "react";
import { markerConfig } from "../../app/constans/config";

export const MarkerSvg = ({ SIZE, name, isOpen, isDarkTheme }) => (
  <svg
    height={SIZE}
    viewBox="0 0 891 1470"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      cursor: "pointer",
      fill: "#FF0000",
      stroke: "none",
      transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
      zIndex: 20,
    }}
  >
    <ellipse
      cx="445.5"
      cy="387.805"
      rx="410.393"
      ry="387.805"
      fill={isOpen ? (isDarkTheme ? "#fff" : "#000") : markerConfig[name][0]}
    />
    <path
      d="M445.5 1470L831.314 521.936H59.6857L445.5 1470Z"
      fill={isOpen ? (isDarkTheme ? "#fff" : "#000") : markerConfig[name][0]}
    />
    <circle cx="446" cy="396" r="339" fill={markerConfig[name][1]} />
    <path
      d="M446 1342L764.697 513.25H127.303L446 1342Z"
      fill={markerConfig[name][1]}
    />
    <circle
      cx="446"
      cy="396"
      r="200"
      fill={isOpen ? (isDarkTheme ? "#fff" : "#000") : "#434343"}
    />
  </svg>
);
