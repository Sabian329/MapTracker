import { Item, ItemsList, Wrapper } from "./styled";
import React, { useEffect, useState } from "react";

import { SortButtons } from "../SortButtons";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectEndpoit } from "../../Redux/selectors";

export const ResutList = ({
  apiItems,
  onSelectCity,
  setActiveId,
  activeId,
  isLoading,
}) => {
  const endpointStore = useSelector(selectEndpoit);
  const [itemsState, setItemsState] = useState({
    items: apiItems,
    direction: false,
    parameter: "name",
  });

  //click on item list transfer view to select poin and open InfoBox
  const setItemActive = (item) => {
    setActiveId(item?.id);
    item.id !== activeId &&
      onSelectCity({
        longitude: item.location.longitude,
        latitude: item.location.latitude,
      });
  };
  useEffect(() => {
    setItemsState((prev) => ({ ...prev, items: apiItems }));
  }, [apiItems]);

  const sortBy = (param) => {
    setItemsState({
      direction: !itemsState.direction,
      items: itemsState.direction
        ? [
            ...itemsState.items.sort((a, b) =>
              a?.[param] > b?.[param] ? 1 : -1
            ),
          ]
        : [
            ...itemsState.items.sort((a, b) =>
              a?.[param] < b?.[param] ? 1 : -1
            ),
          ],
      parameter: param,
    });
  };

  return (
    <Wrapper>
      <SortButtons sortBy={sortBy} {...itemsState} isLoading={isLoading} />
      {!isLoading && (
        <ItemsList>
          {itemsState.items.map((item, index) => (
            <Item key={item.id} onClick={() => setItemActive(item)}>
              <Text>{index + 1}.</Text>
              <Text>{item.name}</Text>
              {endpointStore.searching === "AIRFIELDS" && (
                <Text>{item.address?.city}</Text>
              )}
            </Item>
          ))}
        </ItemsList>
      )}
    </Wrapper>
  );
};
