import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewGame from "./pages/NewGame.jsx";
import { GameContextProvider } from "./GameContext.jsx";
import Game from "./pages/Game.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/newGame",
    element: <NewGame />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameContextProvider>
      <RouterProvider router={router} />
    </GameContextProvider>
  </React.StrictMode>,
);
