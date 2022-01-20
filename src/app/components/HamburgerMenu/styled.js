import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  right: 0;
`;

export const Menu = styled.nav`
  background-color: rgba(0, 0, 0, 0.87);
  width: 20rem;
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 10px 0 10px 10px;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  right: 0;
`;
export const ResultsLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
`;
export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const SearchButtons = styled.div`
  margin-top: 1rem;
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
    background-color: rgba(225, 225, 225, 0.5);
    border-radius: 10px;
    width: 100%;
    button {
      background: none;
      display: flex;
      justify-content: space-between;
    }
  }
  li {
    list-style: none;
  }
`;
