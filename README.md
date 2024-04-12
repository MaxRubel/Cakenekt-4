what it do baby

all the pages/routes are located in the directory: src/pages

to add a new route: 

add a new object like this in main.jsx (You'll see where).
  
  {
    path: "/newGame",          <-----the browser path
    element: <NewGame />,      <-----the React component you want it to pull up
  },


There's also a context wrapper that is storing what player number the current user is: 

  import GameContext from "../GameContext";
  const { isPlayer<number>, selectPlayer<function>, clearGame<function> } = useContext(GameContext)

  and the listener function to connect the game to the server is already in NewGame.jsx 
mmhmm