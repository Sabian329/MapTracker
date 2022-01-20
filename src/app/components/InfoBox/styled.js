import styled from "styled-components";

export const Pin = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 10rem;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 150;
  width: 15rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  button {
    width: 100%;
  }
  h2 {
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
  }
`;
