import React from "react";
// import Emoji from "../../components/Emoji";

import { Container, Grid, Block } from "./styles";

export default () => {
  const grid = Array(20).fill("X");
  return (
    <>
      <Container>
        <Grid>
          {grid.map((el, k) => (
            <Block key={k}>
              <div className="front">s</div>
              <div className="back">
                {/* <Emoji symbol="🤖" label="robo" /> */}
              </div>
            </Block>
          ))}
        </Grid>
      </Container>
    </>
  );
};
