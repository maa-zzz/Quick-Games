import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ConnectFour from "./Components/Games/ConnectFour.js";
import TicTacToe from "./Components/Games/TicTacToe.js";
import Game from './Components/Games/TicTacToeAI';
import ConnectFourAI from "./Components/Games/ConnectFourAI";
import Landing from "./Components/Landing.js";
import About from "./Components/About.js";
import Help from "./Components/Help.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ConnectFour" element={<ConnectFour />} />
          <Route path="/ConnectFourAI" element={<ConnectFourAI />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/TicTacToeAI" element = {<Game/>}/>
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}
