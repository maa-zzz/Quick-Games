import React from "react";
import "./Styles/About.css";
import Navbar from "./Navigation.js";
import Footer from "./Footer";
export default function Help() {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h1>Help</h1>
            <br />
            <br />
            <div class="container">
                <h2>How to play Tic Tac Toe</h2>
                <p>Tic Tac Toe is a simple two-player game played on a 3x3 grid. Players take turns placing their symbol (either an "X" or an "O") on the grid, with the goal of getting three of their symbols in a row (horizontally, vertically, or diagonally) before their opponent does. The first player to do so wins the game. If all of the spaces on the grid are filled and no player has won, the game is a draw.</p>
                <h3>Starting the game:</h3>
                <ul>
                    <li>Player 1 goes first and places an "X" on the grid</li>
                    <li>Player 2 goes second and places an "O" on the grid</li>
                </ul>
                <h3>Taking turns:</h3>
                <ul>
                    <li>Players take turns placing their symbol on an empty space on the grid</li>
                    <li>The game ends when one player gets three of their symbols in a row or all spaces on the grid are filled</li>
                </ul>


                <h2>How to play Connect Four</h2>
                <p>Connect Four is a two-player game played on a 6x7 grid. Players take turns dropping their colored discs into the grid, with the goal of getting four of their discs in a row (horizontally, vertically, or diagonally) before their opponent does. The first player to do so wins the game. If all of the spaces on the grid are filled and no player has won, the game is a draw.</p>
                <h3>Starting the game:</h3>
                <ul>
                    <li>Player 1 goes first and drops their red disc into the grid</li>
                    <li>Player 2 goes second and drops their yellow disc into the grid</li>
                </ul>
                <h3>Taking turns:</h3>
                <ul>
                    <li>Players take turns dropping their disc into one of the seven columns on the grid</li>
                    <li>The disc falls to the lowest empty space in the column</li>
                    <li>The game ends when one player gets four of their discs in a row or all spaces on the grid are filled</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}
