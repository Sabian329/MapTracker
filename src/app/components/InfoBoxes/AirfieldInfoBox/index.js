import {
  AirfieldInfoWraper,
  IconBox,
  LiveIndicator,
  RunwayPhoto,
  WeatherIcon,
  WeatherWraper,
  Wrapper,
} from "./styled";
import {
  Button,
  Collapse,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { URL, apiKey } from "../../../constans/apiWeatherConfig";

import axios from "axios";

export const AirfieldInfoBox = ({
  radio,
  elevation,
  runway,
  photo,
  address,
}) => {
  const [weatherItems, seWeatherItems] = useState([]);
  const [isWatherOpen, setIsWeatherOpen] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  useEffect(() => {
    axios
      .get(`${URL}${address?.city}${apiKey}`)
      .then((res) => {
        seWeatherItems(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [address?.city]);

  return (
    <Wrapper>
      <Button marginTop="1rem" colorScheme="blue" onClick={onToggle}>
        Airfield Info
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <AirfieldInfoWraper>
          <Text>{`Radio : ${radio.name} `}</Text>
          <Text>{`Freq : ${radio.freq} MHz`}</Text>
          <Text>{`Elevation : ${elevation} ft`}</Text>
          <Text>{`RWY directions : ${runway?.numbers[0]} / ${runway?.numbers[1]} `}</Text>
          <Text>{`RWY : ${runway?.dementions[0]}m X ${runway?.dementions[1]}m `}</Text>
          <Text>{`Surface : ${runway?.surface}`}</Text>
          <RunwayPhoto src={photo} />
        </AirfieldInfoWraper>
      </Collapse>
      <Button
        colorScheme="blue"
        onClick={() => setIsWeatherOpen(!isWatherOpen)}
      >
        Live Weather
      </Button>
      <Collapse in={isWatherOpen} animateOpacity>
        {weatherItems.length !== 0 ? (
          <WeatherWraper>
            <IconBox>
              <WeatherIcon
                src={`http://openweathermap.org/img/wn/${weatherItems?.weather[0]?.icon}.png`}
                alt="weather icon"
              />
              <Text>{`${weatherItems?.weather[0]?.description}`}</Text>
            </IconBox>
            <LiveIndicator />
            <Text>{`QNH : ${weatherItems?.main?.pressure} hPa`}</Text>
            <Text>{`Visibility : ${weatherItems?.visibility} m`}</Text>
            <Text>{`Wind direction : ${weatherItems?.wind.deg} °`}</Text>
            <Text>{`Wind speed : ${weatherItems?.wind.speed} m/s`}</Text>
            <Text>{`Temperature : ${weatherItems?.main.temp} °C`}</Text>
            <Text>{`Humidity : ${weatherItems?.main.humidity} %`}</Text>
          </WeatherWraper>
        ) : (
          <Spinner />
        )}
      </Collapse>
    </Wrapper>
  );
};
