import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  players: Array<string>;
}

const TennisGameContainer = styled.div`
  height: 100%;
  background-color: white;
  text-align: center;
  margin: 0 auto;
`;

const TennisGame: React.FC<Props> = ({ players }) => {
  const [currentScore, setCurrentScore] = useState("Love - All");
  const [currentGame, setCurrentGame] = useState("0 - 0");

  function haveAGo() {}

  return (
    <TennisGameContainer aria-hidden="false">
      <h1>Tennis Championship 2022: Sheffield Grand Slam</h1>
      <p>
        Today's final is between {players[0]} and {players[1]} of Zimbabwe
      </p>
      <h3>Score: {currentScore}</h3>

      <h3>Game: {currentGame}</h3>
      <button onClick={() => haveAGo()}>Play</button>
    </TennisGameContainer>
  );
};

export default TennisGame;
