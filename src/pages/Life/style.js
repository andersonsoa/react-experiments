import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(50, 10px);
  grid-template-rows: repeat(50, 10px);
  gap: 1px;
`;

export const Square = styled.div`
  background-color: ${(props) => (props.n === 0 ? "#fafafa" : "#9157c1")};
  transition: background-color 0.1s ease-in-out;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 5px 0;
  border: none;
  outline: none;

  text-transform: uppercase;
  margin: 10px 10px;
  width: 100px;

  transition: 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;
