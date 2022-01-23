import { device } from "../../theme/mediaQueries";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  button {
    margin: 0 0 1rem 0;
  }
  @media ${device.M} {
    width: 10rem;
  }
`;
export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 20rem;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
  gap: 0.1rem;
  background-color: rgba(225, 225, 225, 0.2);

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
    border-radius: 0 10px 10px 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0 10px 10px 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media ${device.M} {
    max-height: 15rem;
  }
`;
export const Item = styled.li`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  :hover {
    cursor: pointer;
    background-color: #3182ce;
  }
  @media ${device.M} {
    font-size: 0.8rem;
  }
`;
