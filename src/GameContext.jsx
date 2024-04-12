/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create the context
const GameContext = createContext();

// Create a provider component
export const GameContextProvider = ({ children }) => {

  const [isPlayer, setIsPlayer] = useState(null)

  const selectPlayer = (num) => {
    setIsPlayer(num)
  };

  const clearGame = () => {
    setIsPlayer(null)
  }

  const gameObject = {
    isPlayer,
    selectPlayer,
    clearGame
  };

  return (
    <GameContext.Provider value={gameObject}>{children}</GameContext.Provider>
  );
};

export default GameContext;
