import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Text,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { Pin } from "./styled";
import React from "react";
import { fullNamesConfig } from "../../constans/config";

export const InfoBox = ({ apiItems, setBoxId }) => {
  return (
    <Pin>
      <Button
        rightIcon={<CloseIcon />}
        colorScheme="blue"
        onClick={() => setBoxId("")}
      >
        Close
      </Button>
      <Heading>{apiItems[0].name}</Heading>
      <Text>{fullNamesConfig[apiItems[0].discriminator]}</Text>
      {apiItems[0].discriminator === "parking" && (
        <Text>{`${apiItems[0].address?.city} ${apiItems[0].address?.street} ${
          apiItems[0].address?.house || ""
        }`}</Text>
      )}
      {apiItems[0].discriminator === "vehicle" && (
        <Box>
          <Text>Plates {apiItems[0].platesNumber || ""}</Text>
          <Text> Site Number {apiItems[0].sideNumber || ""}</Text>
          <Text>Range {apiItems[0].rangeKm || ""}</Text>
          <Text>Type {apiItems[0].type || ""}</Text>
          <div>
            Battery Level{" "}
            <CircularProgress
              value={apiItems[0].batteryLevelPct}
              color="green.400"
            >
              <CircularProgressLabel>
                {apiItems[0].batteryLevelPct + "%" || ""}
              </CircularProgressLabel>
            </CircularProgress>
          </div>
          <Text>Status {apiItems[0].status || ""}</Text>
        </Box>
      )}
    </Pin>
  );
};
