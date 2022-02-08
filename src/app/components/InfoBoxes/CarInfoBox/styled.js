import { device } from "../../../theme/mediaQueries";
import styled from "styled-components";

export const Wrapper = styled.div`
  @media ${device.L} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  @media ${device.M} {
    flex-direction: column;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin: 2rem 0 0 0;
  background-color: rgba(225, 225, 225, 0.2);
  padding: 0.7rem;
  border-radius: 10px;
  @media ${device.L} {
    justify-content: center;
    width: max-content;
    gap: 0;
    width: 50%;
  }
  @media ${device.M} {
    font-size: 0.9rem;
    width: 70%;
    margin: 1rem 0 0 0;
  }
`;
export const StatusActive = styled.strong`
  color: ${({ status }) => (status === `AVAILABLE` ? "#48bb78" : "#d33d3d")};
  animation: ${({ status }) =>
    status === `AVAILABLE` && "activePulse 1.5s infinite"};
  @keyframes activePulse {
    0% {
      color: #48bb78;
    }
    50% {
      color: #00ff40;
    }
    100% {
      color: #48bb78;
    }
  }
`;

export const BatteryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
  @media ${device.L} {
    width: 50%;
  }
  @media ${device.M} {
    flex-direction: row;
    width: 70%;
    margin: 0;
    p {
      font-size: 0.9rem;
    }
  }
`;
