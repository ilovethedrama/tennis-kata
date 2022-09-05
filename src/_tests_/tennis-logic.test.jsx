import { render, screen } from "@testing-library/react";
import TennisGame from "../components/tennisGame";
import { takeTurn, serveBall, hitBall } from "../helpers/helpers";

describe("Tennis game", () => {
  it("score for both players should start the game with of love-all", () => {
    render(<TennisGame players={["Venus", "Yaya"]} />);
    const tennisScore = screen.getByRole("heading", { name: /Score/i });
    expect(tennisScore).toHaveTextContent("Score: Love - All");
  });

  it("should start with both games at 0", () => {
    render(<TennisGame players={["Venus", "Yaya"]} />);
    const gameScore = screen.getByRole("heading", { name: /Game/i });
    expect(gameScore).toHaveTextContent("Game: 0 - 0");
  });

  it("point should be won if a player serves an Ace", () => {
    render(<TennisGame players={["Venus", "Yaya"]} />);
    const gotPoint = takeTurn(serveBall, "Ace");
    expect(gotPoint).toEqual(true);
  });

  it("point should be won if a player Smesh ball", () => {
    render(<TennisGame players={["Venus", "Yaya"]} />);
    const gotPoint = takeTurn(hitBall, "Smesh ball");
    expect(gotPoint).toEqual(true);
  });

  it("point should not be won if a player tries to hit the ball but didn't reach", () => {
    render(<TennisGame players={["Venus", "Yaya"]} />);
    const gotPoint = takeTurn(hitBall, "Didn't reach");
    expect(gotPoint).toEqual(false);
  });
});