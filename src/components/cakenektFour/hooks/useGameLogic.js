import { useEffect } from "react";

export default function useGameLogic(
  gameBoard,
  gameState,
  handleKeydown,
  checkForWinner,
) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    // Check for winner
    if (
      checkForWinner(gameBoard, "black") ||
      checkForWinner(gameBoard, "red")
    ) {
      if (gameState.turn === "red") {
        window.alert("player 1 wins!");
      }
      if (gameState.turn === "black") {
        window.alert("player 2 wins!");
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [gameBoard, gameState.turn, handleKeydown]);
}
