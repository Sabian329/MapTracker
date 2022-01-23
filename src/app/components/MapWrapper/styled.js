import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: black;
  position: relative;
  a {
    display: none;
  }
  .cluster-marker {
    color: #fff;
    background: #1978c8;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .crime-marker {
    background: none;
    border: none;
  }

  .crime-marker img {
    width: 25px;
  }
`;
