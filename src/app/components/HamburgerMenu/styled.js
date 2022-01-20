import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  right: 0;
`;

export const Menu = styled.nav`
  background-color: rgba(0, 0, 0, 0.87);
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
export const SearchButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  button {
    color: #fff;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    background-color: rgba(225, 225, 225, 0.5);
    border-radius: 10px;
    button {
      text-align: left;
      background: none;
      width: 10rem;
    }
  }
  li {
    list-style: none;
  }
`;
