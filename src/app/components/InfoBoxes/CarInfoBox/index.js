import { BatteryWrapper, ListWrapper, StatusActive, Wrapper } from "./styled";
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";

import React from "react";

export const CarInfoBox = ({
  status,
  platesNumber,
  sideNumber,
  rangeKm,
  type,
  batteryLevelPct,
}) => {
  return (
    <Wrapper>
      <ListWrapper>
        <li>
          <Text>
            Status :
            {<StatusActive status={status}>{` ${status}`}</StatusActive> || ""}
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
      </ListWrapper>

      <BatteryWrapper>
        <Text fontSize="1.2rem" fontWeight="600">
          Battery Level
        </Text>
        <CircularProgress size="60px" value={batteryLevelPct} color="green.400">
          <CircularProgressLabel>
            {batteryLevelPct + "%" || ""}
          </CircularProgressLabel>
        </CircularProgress>
      </BatteryWrapper>
    </Wrapper>
  );
};
