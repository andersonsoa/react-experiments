import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export const Grid = styled.article`
  display: grid;

  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);

  gap: 20px;
`;

export const Block = styled.div`
  background-color: #fafafa;
  border-radius: 3px;

  height: 60px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  perspective: 150rem;
  position: relative;

  & div {
    backface-visibility: hidden;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transition: all 0.5s ease;
  }

  & .front {
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  & .back {
    transform: rotateY(-180deg);
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
  }

  &:hover .front {
    transform: rotateY(180deg);
  }

  &:hover .back {
    transform: rotateY(0deg);
  }
`;
