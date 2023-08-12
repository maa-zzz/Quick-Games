import React from "react";
import "./Styles/Options.css";
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardImage
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Options() {
  return (
    <div className="Grids">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4 h-20">
        <MDBCol className="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://img.icons8.com/external-prettycons-flat-prettycons/512/external-tic-tac-toe-games-prettycons-flat-prettycons.png"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/TicTacToe">
                <button type="button" class="btn btn-info btn-block">TicTacToe</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://img.icons8.com/external-prettycons-flat-prettycons/512/external-tic-tac-toe-games-prettycons-flat-prettycons.png"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/TicTacToeAI">
                <button type="button" class="btn btn-info btn-block">TicTacToe AI</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://t3.ftcdn.net/jpg/04/06/93/82/360_F_406938253_AneDCdBsJJic1FpXtQFG929pNAV9m0wm.jpg"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/ConnectFour">
                <button type="button" class="btn btn-info btn-block">Connect Four</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://img.icons8.com/color/512/coming-soon.png"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              
              <button type="button" class="btn btn-info btn-block">Coming Soon!</button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
