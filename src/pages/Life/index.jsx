import React, { useCallback, useState, useRef } from "react";
import { produce } from "immer";
import { Grid, Container, Button, ButtonBox, Square } from "./style";

const buidGrid = (cols = 50, rows = 50) => {
  return Array(rows).fill(Array(cols).fill(0));
};

const positions = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0]
];

export default () => {
  const [grid, setGrid] = useState(() => buidGrid());
  const [run, setRun] = useState(false);

  const random = () => {
    const newGrid = grid.map((c) => {
      return c.map((r) => {
        return Math.random() > 0.75 ? 1 : 0;
      });
    });

    setGrid(newGrid);
  };

  const activate = (row, col) => {
    setGrid((current) =>
      produce(current, (copy) => {
        copy[row][col] = current[row][col] ? 0 : 1;
      })
    );
  };

  const runRef = useRef(run);
  runRef.current = run;

  const evolve = useCallback(() => {
    if (!runRef.current) return;

    setGrid((g) => {
      return produce(g, (copy) => {
        g.forEach((row, i) => {
          row.forEach((col, k) => {
            let neighbors = 0;

            positions.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;

              if (
                newI >= 0 &&
                newI < g.length &&
                newK >= 0 &&
                newK < row.length
              ) {
                neighbors = neighbors + g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              copy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              copy[i][k] = 1;
            }
          });
        });
      });
    });

    setTimeout(evolve, 100);
  }, []);

  return (
    <Container>
      <ButtonBox>
        <Button onClick={random}>randon</Button>
        <Button onClick={() => setGrid(buidGrid())}>reset</Button>
        <Button
          onClick={() => {
            setRun(!run);
            if (!run) {
              runRef.current = true;
              evolve();
            }
          }}
        >
          {run ? "stop" : "start"}
        </Button>
      </ButtonBox>
      <Grid>
        {grid.map((row, r) => {
          return row.map((col, c) => {
            return (
              <Square
                onClick={() => activate(r, c)}
                key={`${r}-${c}`}
                n={col}
              />
            );
          });
        })}
      </Grid>
    </Container>
  );
};
