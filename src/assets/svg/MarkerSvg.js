import React from "react";
import styled from "@emotion/styled";

export const MarkerSvg = ({ SIZE }) => (
  <svg
    height={SIZE}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 58 58"
    style={{
      enableBackground: "new 0 0 58 58",
      cursor: "pointer",
      fill: "#c4c4c4",
      stroke: "none",
      transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
    }}
  >
    <Line x1="29" y1="28" x2="29" y2="57" />
    <CircleOne cx="29" cy="14" r="14" />
    <CircleTwo cx="24" cy="10" r="3" />
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
const Line = styled.line`
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-miterlimit: 10;
`;
const CircleOne = styled.circle`
  fill: #dd352e;
`;
const CircleTwo = styled.circle`
  fill: #f76363;
`;
