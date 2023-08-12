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
                src="https://th.bing.com/th/id/OIG.PNk0N1IT5cNpwoTNi_QN?pid=ImgGn"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/TicTacToe" class="center-link">
                <button type="button" class="btn btn-info btn-block">TicTacToe 2P</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://th.bing.com/th/id/OIG.xHDZa4KVhpXsWww4kOFh?pid=ImgGn"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/TicTacToeAI" class="center-link">
                <button type="button" class="btn btn-info btn-block">TicTacToe AI</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://th.bing.com/th/id/OIG.V0uw4NzSjSa3qsau_.3z?pid=ImgGn"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/ConnectFour" class="center-link" >
                <button type="button" class="btn btn-info btn-block">Connect Four</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://th.bing.com/th/id/OIG.Uam._yG0XYrM.KgeWu_M?pid=ImgGn"
                width="50%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/ConnectFourAI" class="center-link" >
              <button type="button" class="btn btn-info btn-block">Connect Four AI</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
