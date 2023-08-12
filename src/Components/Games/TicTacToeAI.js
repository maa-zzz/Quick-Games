import React, { useState, useEffect } from 'react';
import './TicTacToeAI.css';
import Nav from "../Navigation.js";
import Footer from "../Footer";


function actions(squares) {
  let set = new Set();
  squares.forEach((square, index) => {
    if (!square) {
      set.add(index);
    }
  });
  return set;
}

function player(squares) {
  let cnt1 = 0;
  let cnt2 = 0;
  for (let square of squares) {
    if (square === 'X') ++cnt1;
    else if (square === 'O') ++cnt2;
  }
  return cnt1 > cnt2 ? 'O' : 'X';
}

function result(squares, action) {
  const updated_squares = squares.slice();
  updated_squares[action] = player(squares);
  return updated_squares;
}

function terminal(squares) {
  if (calculateWinner(squares)) return true;
  for (let square of squares) {
    if (!square) return false;
  }
  return true;
}

function utility(squares) {
  const W = calculateWinner(squares);
  let score;
  if (W === "X") score = 10;
  else if (W === "O") score = -10;
  else score = 0;
  return score;
}

function maxvalue(squares, depth) {
  if (terminal(squares)) {
    const score = utility(squares);
    if (score > 0) return score - depth;
    else if (score < 0) return score + depth;
    return score;
  }
  let v = -Infinity;
  for (let action of actions(squares)) {
    v = Math.max(v, minvalue(result(squares, action), depth + 1));
  }
  return v;
}

function minvalue(squares, depth) {
  if (terminal(squares)) {
    const score = utility(squares);
    if (score > 0) return score - depth;
    else if (score < 0) return score + depth;
    return score;
  }
  let v = Infinity;
  for (let action of actions(squares)) {
    v = Math.min(v, maxvalue(result(squares, action), depth + 1));
  }
  return v;
}

function minimax(squares) {
  let optimal_score;
  let optimal_state;

  if (player(squares) === "X") {
    optimal_score = -Infinity;
    for (let state of actions(squares)) {
      let val = minvalue(result(squares, state), 0);
      if (val > optimal_score) {
        optimal_score = val;
        optimal_state = state;
      }
    }
  } else {
    optimal_score = Infinity;
    for (let state of actions(squares)) {
      let val = maxvalue(result(squares, state), 0);
      if (val < optimal_score) {
        optimal_score = val;
        optimal_state = state;
      }
    }
  }
  return optimal_state;
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
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const boardmap = [
  'top left', 'top', 'top right',
  'middle left', 'middle', 'middle right',
  'bottom left', 'bottom', 'bottom right'
];

function Square(props) {
  if (props.onClick) {
    return (
      <button className={`square ${boardmap[props.location]}`} onClick={props.onClick}>
        {props.value}
      </button>
    );
  } else {
    return (
      <button className={`square ${boardmap[props.location]}`}>
        {props.value}
      </button>
    );
  }
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

export default function Game() {
    const [history, setHistory] = useState([{
      squares: Array(9).fill(null),
    }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = history[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(newHistory.concat([{
      squares: squares
    }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }


const makeAiMove = () => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = history[newHistory.length - 1];
    const squares = current.squares.slice();
    const move = minimax(squares);
    
    // Check if the game is over or the selected square is already occupied
    if (calculateWinner(squares) || squares[move]) {
      return;
    }
    
    const aiMark = xIsNext ? "X" : "O"; // Randomly assign "X" or "O" for AI's mark
    squares[move] = aiMark;
  
    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };
  
  useEffect(() => {
    if (xIsNext) {
      setTimeout(() => {
        makeAiMove();
      }, 500);
    }
  }, [xIsNext]);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let undo;
    if (!stepNumber) {
        undo = <button className="btn btn-success" disabled>Undo</button>;
      } else {
        const move = Math.max(0,stepNumber - 2);
        undo = (
          <button
            className="btn btn-success"
            onClick={() => {
              jumpTo(move);
            }}
          >
            Undo
          </button>
        );
      }
  let status;
  if (winner) {
    status = <div className="winner">Winner: {winner}</div>;
  } else {
    const tie = terminal(current.squares);
    if (tie) status = <div className="tie">Tie</div>;
    else status = `${xIsNext ? 'AI' : 'Player'}`+"'s turn";
  }

  return (
    <>
      <Nav />
      <br/>
      <div class="container">
        <h1> TIC-TAC-TOE AI</h1>
        <br/>
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i) => handleClick(i)} />
          </div>
          <div className="game-info">
            <ol>{undo}</ol>
          </div>
        </div>
        <br/>

        <br/>
        <div class="bottom">
        <div class= "status"><h3>{status}</h3>
        <button type="button" class="btn btn-warning" onClick={() => { jumpTo(0); }}>
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

