import { ArrowUpIcon, UpDownIcon } from "@chakra-ui/icons";
import { Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { Item, ItemsList, Wrapper } from "./styled";

import React from "react";

export const ResutList = ({
  apiItems,
  onSelectCity,
  setBoxId,
  searchObject,
  boxId,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const setItemActive = (item) => {
    setBoxId(item?.id);
    onSelectCity({
      longitude: item.location.longitude,
      latitude: item.location.latitude,
    });
  };

  return (
    <Wrapper>
      <Button
        rightIcon={<UpDownIcon />}
        colorScheme="blue"
        color="white"
        onClick={onToggle}
      >
        Sort By
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Button rightIcon={<ArrowUpIcon />} colorScheme="blue" color="white">
          Name
        </Button>
        {searchObject === "VEHICLE" && (
          <>
            <Button colorScheme="blue" color="white">
              Battery
            </Button>
            <Button colorScheme="blue" color="white">
              Range
            </Button>
          </>
        )}
      </Collapse>
      <ItemsList>
        {apiItems.map((item, index) => (
          <Item key={item.id} onClick={() => setItemActive(item)}>
            <p>{index + 1}.</p>
            <p>{item.name}</p>
          </Item>
        ))}
      </ItemsList>
    </Wrapper>
  );
};
