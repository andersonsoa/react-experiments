import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.main`
  height: 70%;
  min-width: 60%;
  padding: 0 20px;
  background: #fff;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;

  justify-items: center;
  align-items: center;
`;

export const Screen = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 100px;
  align-items: center;
  justify-items: center;
  gap: 10px;

  p {
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
  }
`;

export const Letters = styled.aside`
  border-top: 2px dashed #434343;
  width: 380px;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Letter = styled.button`
  font-size: 14px;
  color: ${(props) => (props.color ? "#fafafa" : "#454545")};
  background-color: ${(props) => props.color || ""};
  padding: 5px 6px;
  margin: 4px;
  font-family: "Press Start 2P";
  border: 1px solid #444;
  border-radius: 3px;
  outline: none;
  transition: 0.2s;
  box-shadow: 0 4px 3px -3px #888;
  cursor: pointer;

  &:hover {
    background-color: yellow;
  }
`;

// Marked Words

export const MarkedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const MakedWord = styled.div`
  margin: 3px;
  width: 35px;
  height: 40px;
  background: #efefef;
  font-family: "Press Start 2P";
  font-size: 2rem;
  color: #232323;
  border-radius: 4px;
  border-bottom: 4px solid #454545;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 8px 10px -2px #5558;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #0009;
  z-index: 100;

  div {
    background: #fafafa99;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 10px 10px 15px #444;
    text-align: center;
    h1 {
      font-family: "Press Start 2P";
      font-size: 1.2rem;
      color: indianred;

      margin: 10px;
    }
    h2 {
      font-family: "Press Start 2P";
      font-size: 1rem;
      color: #232323;

      margin: 10px;
    }

    button {
      border: none;
      outline: none;
      padding: 5px 10px;
      width: 100px;
      color: #232323;
      background: #ff0;
      cursor: pointer;

      font-family: "Press Start 2P";
      font-size: 1.6rem;

      box-shadow: 0 0 0 5px #0008;

      transition: 0.2s ease;

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
