import React from "react";
import "./Styles/About.css";
import Navbar from "./Navigation.js";
import Footer from "./Footer";
export default function About() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <h1>About</h1>
      <br />
      <br />
      <div class="container">
        <p>
          Our website offers two classic board games, Tic Tac Toe and Connect
          Four, for players to enjoy online. Tic Tac Toe is a simple strategy
          game for two players, who take turns marking the spaces in a 3x3 grid.
          The player who succeeds in placing three of their marks in a
          horizontal, vertical, or diagonal row is the winner. Connect Four is a
          two-player connection game in which the players first choose a color
          and then take turns dropping colored discs from the top into a
          seven-column, six-row vertically suspended grid. The pieces fall
          straight down, occupying the next available space within the column.
          The objective of the game is to be the first to form a horizontal,
          vertical, or diagonal line of four of one's own discs.
        </p>
        <p>
          Both games are easy to learn and can provide hours of entertainment
          for players of all ages. We hope you enjoy playing on our website!
        </p>
      </div>
      <Footer />
    </div>
  );
}
