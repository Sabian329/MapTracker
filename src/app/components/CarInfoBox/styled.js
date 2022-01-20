import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin-top: 2rem;
`;
export const StatusActive = styled.strong`
  color: ${(props) => (props?.color === `AVAILABLE` ? "#48bb78" : "#d33d3d")};
`;

export const BatteryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;
