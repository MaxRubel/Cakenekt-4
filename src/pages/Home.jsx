import { useNavigate } from "react-router";
import "../styles/global.scss";
import "../styles/App.css";
import { createNewGame, updateGame } from "../../api/game";
import GameContext from "../GameContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const { clearGame } = useContext(GameContext)

  useEffect(() => {
    clearGame()
  }, [])

  const handleNewGame = () => {
    const payload = {
      player1: false,
      player2: false
    }

    createNewGame(payload).then(({ name }) => {
      updateGame({ gameId: name });
      navigate(`/newGame?gameId=${name}`);
    });
  };

  return (
    <>
      <div className="center-container">
        <div className="big-shrimp">🍤🍤🍤🍤</div>
        <div id="button div">
          <button
            type="button"
            onClick={() => {
              handleNewGame();
            }}
          >
            Create A New Game
          </button>
        </div>
      </div>
    </>
  );
}
