import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/newGame.scss";
import GameContext from "../GameContext";
import { useContext, useEffect, useState } from "react";
import { updateGame } from "../../api/game";
import firebase from "firebase/compat/app";


export default function NewGame() {
  const db = firebase.database();
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get("gameId");
  const [gameData, setGameData] = useState({
    player1: false,
    player2: false
  })
  const { isPlayer, selectPlayer } = useContext(GameContext);
  const navigate = useNavigate()

  useEffect(() => { //firebase listener function
    const listenerRef = db.ref('games').orderByChild('gameId').equalTo(gameId);

    const onGameUpdated = (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const dataFormatted = (Object.values(snapshot.val()))[0]
        setGameData((preVal) => dataFormatted)
      }
    };

    const listener = listenerRef.on('value', onGameUpdated);

    return () => {
      listenerRef.off('value', listener);
    };
  }, [gameId]);


  useEffect(() => { //start game
    if (gameData.player1 && gameData.player2) {
      navigate(`/game?gameId=${gameId}`);
    }
  }, [gameData])


  const handlePlayer1 = () => {
    // if (!isPlayer) {
    selectPlayer(1)
    const payload = { gameId, player1: true };
    updateGame(payload);
    // } else {
    //   window.alert('you are already playing')
    // }
  };

  const handlePlayer2 = () => {
    // if (!isPlayer) {
    selectPlayer(2)
    const payload = { gameId, player2: true };
    updateGame(payload);
    // } 
    // else {
    //   window.alert('you are already playing')
    // }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`https://pokejon.netlify.app/newGame?gameId=${gameId}`).then(() => {
      window.alert('Game Link Copied!')
    })
  }

  return (
    <>
      <div className="new-game-container center-container">
        <button onClick={handleShare}>
          Share Link
        </button>
        {gameData.player1 ? (
          <button
            className="width300"
            disabled>Player 1 has joined ⚔️</button>
        ) : (
          <button
            className="width300"
            onClick={() => {
              handlePlayer1();
            }}
          >
            Join Player 1
          </button>
        )}
        {gameData.player2 ? (
          <button
            className="width300"
            disabled>Player 2 has joined 🧙‍♂️</button>
        ) : (
          <button
            className="width300"
            onClick={() => {
              handlePlayer2();
            }}
          >
            Join Player 2
          </button>
        )}
      </div>
    </>
  );
}
