import React, { useState } from "react";

import "./TicTacToe.css";
import Nav from "../Navigation.js";
import Footer from "../Footer";
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr"
      }}
    >
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
}

export default function TicTacToe() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  function handleClick(i) {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Move back to " + move : "Beginning";
    return (
      <ul key={move}>
        <button type="button" className="btn btn-sm btn-outline-info" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </ul>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status =(xIsNext ? "X" : "O")+"'s turn";
  }
  function resetGame() {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
  }

  return (
    <>
      <Nav />
      <br/>
      {/* <br/>  */}
      <div class="container">
        <h1> TIC-TAC-TOE </h1>
        <br/>
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i) => handleClick(i)} />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
        <br/>

        <br/>
        <div class="bottom">
        <div class= "status"><h3>{status}</h3>
        <button type="button" class="btn btn-warning" onClick={resetGame}>
          Restart?
        </button>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    </>
  );
}
