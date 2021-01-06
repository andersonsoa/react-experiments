import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  font-family: "Press Start 2P", Arial, Helvetica, sans-serif;

  color: #fafafa;

  text-shadow: 3px 3px 0 indianred, 3px -3px 0 indianred, -3px 3px 0 indianred,
    -3px -3px 0 indianred;
`;

export const Links = styled.ul`
  list-style: none;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  li {
    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.8rem;
      font-family: "Roboto Slab";
      padding: 0 10px;
    }

    a:hover {
      border-bottom: 4px dashed red;
    }
  }
`;
