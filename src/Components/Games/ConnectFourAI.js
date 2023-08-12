import React from 'react';
import Footer from "../Footer.js";
import Nav from "../Navigation.js";

export default function ConnectFourAI() {
  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh', // You can adjust this value to control the vertical centering
  };

  return (
    <>
      <Nav />
      <br />
      <h1>CONNECT FOUR AI</h1>
      <div style={imageContainerStyle}> {/* Apply inline style */}
        <img src="https://technologystudent.com/culture1/landv1a.gif" alt="Connect Four Board" />
      </div>
      <Footer />
    </>
  );
}
