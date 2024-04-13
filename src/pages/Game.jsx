import { useSearchParams } from "react-router-dom";
import "../styles/game.scss";
import Chat from "../components/Chat";
import CakenektFour from "../components/CakenektFour";
export default function Game() {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get("gameId");
  return (
    <div className="game-page-container">
      <div id="col1" className="game-container">
        <CakenektFour gameId={gameId} />
      </div>
    </div>
  );
}
