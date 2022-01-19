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
    viewBox="0 0 492.452 492.452"
    style={{
      enableBackground: "new 0 0 58 58",
      cursor: "pointer",
      fill: "#c4c4c4",
      stroke: "none",
      transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
      zIndex: 20,
    }}
  >
    <path
      id="XMLID_152_"
      d="M246.181,0C127.095,0,59.533,102.676,84.72,211.82c17.938,77.722,126.259,280.631,161.462,280.631
	c32.892,0,143.243-202.975,161.463-280.631C432.996,103.74,365.965,0,246.181,0z M246.232,224.97
	c-34.38,0-62.244-27.863-62.244-62.244c0-34.381,27.864-62.244,62.244-62.244c34.38,0,62.244,27.863,62.244,62.244
	C308.476 fill='#fc0303',197.107,280.612,224.97,246.232,224.97z ; "
    />
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
  z-index: 50;
`;
const CircleOne = styled.circle`
  fill: #dd352e;
`;
const CircleTwo = styled.circle`
  fill: #f76363;
`;
