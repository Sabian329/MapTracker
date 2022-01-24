import { device } from "../../theme/mediaQueries";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 250;
  right: 0;
`;

export const Menu = styled.nav`
  background-color: rgba(0, 0, 0, 0.87);
  width: 20rem;
  height: 100vh;
  max-height: 1000px;
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 10px 0 0 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(225, 225, 225, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0 10px 10px 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  hr {
    width: 90%;
    color: #fff;
  }
  @media ${device.L} {
    background-color: rgba(0, 0, 0);
    height: 100vh;
  }
  @media ${device.M} {
    padding: 2rem 0 0 0;
    width: 14rem;
    gap: 1rem;
    border-radius: 10px 0 0 10px;

    hr {
      width: 70%;
    }
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  right: 0.5rem;
`;
export const ResultsLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 3rem;
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  @media ${device.M} {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const SearchButtons = styled.div`
  width: 15rem;
  div {
    width: 100%;
  }
  button {
    color: #fff;
    width: 100%;
  }
  ul {
    margin-top: 1rem;
    background-color: rgba(225, 225, 225, 0.2);
    border-radius: 10px;
    width: 100%;
    button {
      background: none;
      display: flex;
      justify-content: space-between;
      @media ${device.M} {
        font-size: 0.8rem;
      }
    }
  }
  li {
    list-style: none;
  }
  @media ${device.M} {
    width: 10rem;
  }
`;
