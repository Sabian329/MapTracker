import { device } from "../../../theme/mediaQueries";
import styled from "styled-components";

export const BoxWrapper = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 150;
  width: 17rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;

  button {
    width: 100%;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
  }
  @media ${device.L} {
    width: 100vw;
    left: 0rem;
    bottom: 0rem;
    border-radius: 15px 15px 0 0;
  }
`;
