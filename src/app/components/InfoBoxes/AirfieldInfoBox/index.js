import { Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Wrapper } from "./styled";
import axios from "axios";

export const AirfieldInfoBox = ({ freq, elevation, runways, photo }) => {
  const city = "warsaw";
  const [weatherItems, seWeatherItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q= ${city} ,pl&units=metric&appid=750e57bdaec3cc4c8208faae92e8c059`
      )
      .then((res) => {
        console.log(res.data);
        seWeatherItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <Text>{`Radio : ${freq}`}</Text>
      <Text>{`Elevation : ${elevation}`}</Text>
      <Text>{`RWY : ${runways}`}</Text>
      <Text>{`QNH ${weatherItems.main?.pressure}`}</Text>
      <Text>{`visibility ${weatherItems?.visibility} ft`}</Text>
      {/* <Text>{`${weatherItems?.weather[0].description}`}</Text> */}
      <Image boxSize="150px" src={photo} />
    </Wrapper>
  );
};
