import { BatteryWrapper, StatusActive, Wrapper } from "./styled";
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";

import React from "react";

export const CarInfobox = ({
  status,
  platesNumber,
  sideNumber,
  rangeKm,
  type,
  batteryLevelPct,
}) => {
  return (
    <>
      <Wrapper>
        <li>
          <Text>
            Status :{" "}
            {<StatusActive color={status}>{status}</StatusActive> || ""}
          </Text>
        </li>
        <li>
          <Text>Plates : {<strong>{platesNumber}</strong> || ""}</Text>
        </li>
        <li>
          <Text> Site Number : {<strong>{sideNumber}</strong> || ""}</Text>
        </li>
        <li>
          <Text>Range : {<strong>{`${rangeKm} km`}</strong> || ""}</Text>
        </li>
        <li>
          <Text>Type : {<strong>{type}</strong> || ""}</Text>
        </li>
      </Wrapper>

      <BatteryWrapper>
        <Text fontSize="1.2rem" fontWeight="600">
          Battery Level
        </Text>
        <CircularProgress
          size="100px"
          value={batteryLevelPct}
          color="green.400"
        >
          <CircularProgressLabel>
            {batteryLevelPct + "%" || ""}
          </CircularProgressLabel>
        </CircularProgress>
      </BatteryWrapper>
    </>
  );
};
