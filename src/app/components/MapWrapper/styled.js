import { size } from "../../theme/mediaQueries";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 150;
  background-color: black;
  position: relative;
  max-width: ${size.XL};
  overflow: hidden;
  a {
    display: none;
  }
`;
