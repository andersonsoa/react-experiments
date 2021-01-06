import React from "react";
import { Link } from "react-router-dom";

import { Container, Title, Links } from "./styles";
import Emoji from "../../components/Emoji";

export default () => {
  const routes = [
    {
      path: "/velha",
      name: "Velha"
    },
    {
      path: "/memoria",
      name: "Memória"
    },
    {
      path: "/forca",
      name: "Forca"
    },
    {
      path: "/life",
      name: "Life"
    }
  ];

  return (
    <Container>
      <Title>Arcade!</Title>
      https://www.freecodecamp.org/news/8-reactjs-project-ideas-to-start-learning-by-doing/
      <Links>
        {routes.map((route) => (
          <li>
            <Emoji style={{ fontSize: 20 }} symbol="🕹️" label="joystick" />
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </Links>
    </Container>
  );
};
