import React, { useState, useCallback } from "react";

import {
  Container,
  Overlay,
  Grid,
  Letter,
  Letters,
  Screen,
  MarkedContainer,
  MakedWord
} from "./styles";
import genWord from "../../services/genWord";

import Svg from "../../components/Svg";

const removeSpecialCaracter = (str) => {
  const acento =
    "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
  const semAcento =
    "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";

  return [...str]
    .map((l) => {
      const achou = acento.indexOf(l);
      return achou > 0 ? semAcento[achou] : l;
    })
    .join("");
};

const loadData = () => {
  const { word, tip, masked } = genWord();
  return {
    word: removeSpecialCaracter(word),
    tip,
    masked,
    errors: []
  };
};

export default () => {
  const [game, setGame] = useState(() => loadData());
  const [pieces, setPieces] = useState(6);

  const letters = [..."abcdefghijlmnopqrstuvxz"];

  const selectLetter = useCallback(
    (letter) => {
      const found = [...game.word].filter((w) => w === letter);

      if (found.length > 0) {
        const newMask = game.masked.map((el, idx) => {
          return game.word[idx] === letter ? letter : el;
        });
        setGame((cur) => ({
          ...cur,
          masked: newMask
        }));
      } else {
        setPieces((prev) => prev - 1);
        setGame((prev) => ({
          ...prev,
          errors: [...prev.errors, letter]
        }));
      }
    },
    [game.masked, game.word, setGame]
  );

  const resetGame = () => {
    setGame(() => loadData());
    setPieces(6);
  };

  const computeEndGame = () => {
    return pieces <= 0 || game.word === game.masked.join("");
  };

  return (
    <Container>
      {computeEndGame() && (
        <Overlay>
          <div>
            <h1>Voce {pieces <= 0 ? "Perdeu" : "Ganhou"}</h1>
            <h2>Jogar Novamente ?</h2>
            <button onClick={() => resetGame()}>Yes</button>
          </div>
        </Overlay>
      )}
      <Grid>
        <Screen>
          <p>{game.tip}</p>
          <Svg
            head={pieces < 6}
            core={pieces < 5}
            arm1={pieces < 4}
            arm2={pieces < 3}
            leg1={pieces < 2}
            leg2={pieces < 1}
            died={pieces < 1}
          />
          <MarkedContainer>
            {game.masked.map((space, idx) => (
              <MakedWord key={idx}>{space}</MakedWord>
            ))}
          </MarkedContainer>
        </Screen>
        <Letters>
          {letters.map((l, idx) => (
            <Letter
              color={
                game.masked.includes(l)
                  ? "green"
                  : game.errors.includes(l)
                  ? "red"
                  : ""
              }
              onClick={() => selectLetter(l)}
              key={idx}
            >
              {l}
            </Letter>
          ))}
        </Letters>
      </Grid>
    </Container>
  );
};
