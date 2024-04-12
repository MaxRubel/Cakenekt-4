import Home from "./pages/Home";
import "./styles/App.css";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewGame from "./pages/NewGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<Home />} />
            <Route path="newGame" element={<NewGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
