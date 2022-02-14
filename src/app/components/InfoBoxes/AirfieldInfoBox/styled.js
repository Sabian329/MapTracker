import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  a {
    display: block;
  }
`;
export const RunwayPhoto = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const WeatherIcon = styled.img`
  width: 3rem;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WeatherWraper = styled.div`
  background-color: #3d3d3d;
  width: 100%;
  border-radius: 10px;
  padding: 2rem 1rem 1rem 1rem;
  position: relative;
  text-align: justify;
`;
export const LiveIndicator = styled.div`
  background-color: red;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  animation: blink 2s infinite;

  @keyframes blink {
    0% {
      background-color: #9e4037;
    }
    50% {
      background-color: #ff1500;
    }
    100% {
      background-color: #9e4037;
    }
  }
`;
export const AirfieldInfoWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #3d3d3d;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
`;
