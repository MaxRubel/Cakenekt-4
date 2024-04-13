import { useContext, useEffect, useLayoutEffect, useState } from "react";
import gameBoardImage from "../assets/images/roughGameBoard.png";
import firebase from "firebase/compat/app";
import GameContext from "../GameContext";
import BlackPiece from "./cakenektFour/BlackPiece";
import RedPiece from "./cakenektFour/RedPiece";
import "../styles/cakenektFour.scss";
import GameBoard from "./cakenektFour/GameBoard";
import { deleteGame, updateGame } from "../../api/game";
import initGameBoard from "./cakenektFour/initGameBoard";
import Chat from "./Chat";

// eslint-disable-next-line react/prop-types
export default function CakenektFour({ gameId }) {
  const db = firebase.database();
  const { isPlayer } = useContext(GameContext);
  const [gameState, setGameState] = useState({ turn: "black" });
  const [gameBoard, setGameBoard] = useState([...initGameBoard]);
  const [sendIt, setSendIt] = useState(0);
  const [canSend, setCanSend] = useState(false);
  const [winner, setWinner] = useState(null);

  //update game state on server
  useEffect(() => {
    if (canSend) {
      updateGame(gameState);
      setCanSend((preVal) => false);
    }
  }, [gameState]);

  //receive game state from server
  useEffect(() => {
    const gameRef = db.ref("games").orderByChild("gameId").equalTo(gameId);
    const onGameUpdated = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const updatedState = Object.values(data)[0];
        setGameState(updatedState);
        setCanSend((preVal) => false);
        if (updatedState.lastChange) {
          const newGameBoard = [...gameBoard];
          const [col, row, player] = updatedState.lastChange.split("/");
          newGameBoard[col][row] = player;
          setGameBoard((prevBoard) => {
            const newGameBoard = JSON.parse(JSON.stringify(prevBoard));
            newGameBoard[col][row] = player;
            return newGameBoard;
          });
        } else {
          setGameState((preVal) => ({ ...preVal, state: "playing" }));
          setGameBoard([
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
          ]);
        }
      }
    };
    const addedListener = gameRef.on("value", onGameUpdated);
    return () => {
      gameRef.off("value", onGameUpdated);
    };
  }, [gameId]);

  useEffect(() => {
    const onbeforeunloadFn = () => {
      deleteGame(gameId);
    };
    window.addEventListener("beforeunload", onbeforeunloadFn);
    return () => {
      window.removeEventListener("beforeunload", onbeforeunloadFn);
    };
  }, []);

  const handleKeydown = (e) => {
    if (
      gameState.state === "gameOver" ||
      e.srcElement.id === "chatInput" ||
      (isPlayer === 1 && gameState.turn === "red") ||
      (isPlayer === 2 && gameState.turn === "black")
    ) {
      return;
    }
    setCanSend((preVal) => true);
    if (e.key === "ArrowLeft" || e.key === "a") {
      setGameState((prevState) => ({
        ...prevState,
        playingCol:
          prevState.playingCol > 0
            ? prevState.playingCol - 1
            : prevState.playingCol,
      }));
    }
    if (e.key === "ArrowRight" || e.key === "d") {
      setGameState((prevState) => ({
        ...prevState,
        playingCol:
          prevState.playingCol < 6
            ? prevState.playingCol + 1
            : prevState.playingCol,
      }));
    }
    if (e.key === " " || e.key === "ArrowDown") {
      setSendIt((preVal) => preVal + 1);
    }
  };

  //add event listener for moving piece
  useEffect(() => {
    if (gameState.state === "playing") {
      document.addEventListener("keydown", handleKeydown);
      if (
        checkForWinner(gameBoard, "black") ||
        checkForWinner(gameBoard, "red")
      ) {
        setCanSend((preVal) => true);
        setGameState((preVal) => ({ ...preVal, state: "gameOver" }));
        if (gameState.turn === "red") {
          setWinner((preVal) => "Player 1");
        }
        if (gameState.turn === "black") {
          setWinner((preVal) => "Player 2");
        }
      }
    }
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [gameState.turn, gameState.state]);

  const checkForOpenSpot = () => {
    for (let i = 0; i < gameBoard[gameState.playingCol].length; i++) {
      if (!gameBoard[gameState.playingCol][i]) {
        return i;
      }
    }
    return false;
  };

  const checkForWinner = (board, player) => {
    // Check rows
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col <= board[row].length - 4; col++) {
        if (
          board[row][col] === player &&
          board[row][col + 1] === player &&
          board[row][col + 2] === player &&
          board[row][col + 3] === player
        ) {
          return true;
        }
      }
    }

    // Check columns
    for (let col = 0; col < board[0].length; col++) {
      for (let row = 0; row <= board.length - 4; row++) {
        if (
          board[row][col] === player &&
          board[row + 1][col] === player &&
          board[row + 2][col] === player &&
          board[row + 3][col] === player
        ) {
          return true;
        }
      }
    }

    // Check diagonals (upwards)
    for (let row = 3; row < board.length; row++) {
      for (let col = 0; col <= board[row].length - 4; col++) {
        if (
          board[row][col] === player &&
          board[row - 1][col + 1] === player &&
          board[row - 2][col + 2] === player &&
          board[row - 3][col + 3] === player
        ) {
          return true;
        }
      }
    }

    // Check diagonals (downwards)
    for (let row = 0; row <= board.length - 4; row++) {
      for (let col = 0; col <= board[row].length - 4; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col + 1] === player &&
          board[row + 2][col + 2] === player &&
          board[row + 3][col + 3] === player
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const switchTurns = (lastChange) => {
    setCanSend((preVal) => true);
    if (gameState.turn === "red") {
      setGameState((preVal) => ({
        ...preVal,
        turn: "black",
        lastChange,
        playingCol: 3,
      }));
    } else {
      setGameState((preVal) => ({
        ...preVal,
        turn: "red",
        lastChange,
        playingCol: 3,
      }));
    }
  };
  const handlePlayAgain = () => {
    setCanSend((preVal) => true);
    setGameState((preVal) => ({
      ...preVal,
      lastChange: null,
      turn: winner === "Player 1" ? "red" : "black",
      playingCol: 3,
    }));
  };

  useEffect(() => {
    if (sendIt) {
      const spot = checkForOpenSpot();
      if (spot !== false) {
        const newGameBoard = [...gameBoard];
        newGameBoard[gameState.playingCol][spot] = gameState.turn;
        const lastChange = `${gameState.playingCol}/${spot}/${gameState.turn}`;
        switchTurns(lastChange);
      }
    }
  }, [sendIt]);

  if (gameState.state === "gameOver") {
    return (
      <div>
        <div className="centered-text">
          <h1>{winner && `${winner} wins!`}</h1>
          <div style={{ margin: "30px 0px" }}>
            <button onClick={handlePlayAgain}>Play Again?</button>
          </div>
        </div>
        <div className="game-grid">
          <div className="image-div">
            <img src={gameBoardImage} />
          </div>
          <div className="pieces-div">
            <GameBoard gameBoard={gameBoard} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <div className="centered-text">
            <h2>
              {" "}
              {gameState.turn === "black"
                ? "Player 1's Turn"
                : "Player 2's Turn"}
            </h2>
          </div>
          {gameState.turn === "black" ? (
            <BlackPiece choosingCol={gameState.playingCol} />
          ) : (
            <RedPiece choosingCol={gameState.playingCol} />
          )}
          <div className="game-grid">
            <div className="image-div">
              <img src={gameBoardImage} />
            </div>
            <div className="pieces-div">
              <GameBoard gameBoard={gameBoard} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", top: "900px" }}>
          <Chat gameId={gameId} />
        </div>
      </>
    );
  }
}
