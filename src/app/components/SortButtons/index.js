import { Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon, UpDownIcon } from "@chakra-ui/icons";

import React from "react";
import { Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectEndpoit } from "../../Redux/selectors";

export const SortButtons = ({ parameter, direction, sortBy, isLoading }) => {
  const endpointStore = useSelector(selectEndpoit);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Wrapper>
      <Button
        isLoading={isLoading}
        rightIcon={<UpDownIcon />}
        colorScheme="blue"
        color="white"
        onClick={onToggle}
      >
        Sort by
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Button
          onClick={() => sortBy("name")}
          rightIcon={
            parameter === "name" ? (
              direction ? (
                <TriangleUpIcon />
              ) : (
                <TriangleDownIcon />
              )
            ) : null
          }
          colorScheme="green"
          color="white"
        >
          Name
        </Button>
        {endpointStore.searching === "VEHICLE" && (
          <>
            <Button
              rightIcon={
                parameter === "batteryLevelPct" ? (
                  direction ? (
                    <TriangleUpIcon />
                  ) : (
                    <TriangleDownIcon />
                  )
                ) : null
              }
              onClick={() => sortBy("batteryLevelPct")}
              colorScheme="green"
              color="white"
            >
              Battery
            </Button>
            <Button
              rightIcon={
                parameter === "rangeKm" ? (
                  direction ? (
                    <TriangleUpIcon />
                  ) : (
                    <TriangleDownIcon />
                  )
                ) : null
              }
              onClick={() => sortBy("rangeKm")}
              colorScheme="green"
              color="white"
            >
              Range
            </Button>
          </>
        )}
      </Collapse>
    </Wrapper>
  );
};
