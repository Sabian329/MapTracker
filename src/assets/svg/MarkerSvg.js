import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { markerConfig } from "../../app/constans/mapObjectsConfig";

export const MarkerSvg = ({ SIZE, name, disc, isActive }) => {
  return (
    <Tooltip hasArrow label={name} bg="gray.300" color="black">
      <div
        style={{
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
        }}
      >
        <svg
          height={SIZE}
          viewBox="0 0 891 1470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            cursor: "pointer",
            fill: "#FF0000",
            stroke: "none",
            zIndex: 20,
          }}
        >
          <ellipse
            cx="445.5"
            cy="387.805"
            rx="410.393"
            ry="387.805"
            fill={isActive ? "#fff" : markerConfig[disc][0]}
            style={{ transition: "0.4s", zIndex: isActive && "1000" }}
          />
          <path
            d="M445.5 1470L831.314 521.936H59.6857L445.5 1470Z"
            fill={isActive ? "#fff" : markerConfig[disc][0]}
            style={{ transition: "0.4s" }}
          />
          <circle cx="446" cy="396" r="339" fill={markerConfig[disc][1]} />
          <path
            d="M446 1342L764.697 513.25H127.303L446 1342Z"
            fill={markerConfig[disc][1]}
            style={{ transition: "0.4s" }}
          />
          <circle
            cx="446"
            cy="396"
            r="200"
            fill={isActive ? "#fff" : "#c4c4c4"}
            style={{ transition: "0.4s" }}
          ></circle>
        </svg>
      </div>
    </Tooltip>
  );
};
