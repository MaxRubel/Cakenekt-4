import { useSearchParams } from "react-router-dom";
import "../styles/game.scss"
import Chat from "../components/Chat";
export default function Game() {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get("gameId");
  return (
    <div className="game-page-container">
      <div
        id="col1"
        className="game-container">
        game
      </div>
      <div
        id="col2"
        className="chat-container">
        <Chat gameId={gameId} />
      </div>
    </div>
  )
}