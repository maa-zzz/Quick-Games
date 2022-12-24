import Footer from "./Footer";
import Options from "./Options";
import "./Styles/Landing.css";
import Nav from "./Navigation";

export default function Landing() {
  return (
    <>
      <Nav />
      <div class="container">
        <br />
        <h1>Welcome to QuickGames</h1>
        <Options />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
