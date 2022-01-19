import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  right: 0;
`;

export const Menu = styled.nav`
  background-color: #c4c4c430;
  height: 100vh;
  width: 20rem;
  padding: 5rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  right: 0;
  background-color: black;
`;
export const ThemeSwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin: 0.5rem;
  }
`;
export const Results = styled.div`
  background-color: black;
  margin: 1rem;
  height: 20rem;
  width: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`;
