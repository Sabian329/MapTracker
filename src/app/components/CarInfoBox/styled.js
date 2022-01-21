import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin-top: 2rem;
  background-color: rgba(225, 225, 225, 0.2);
  padding: 0.7rem;
  border-radius: 10px;
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
