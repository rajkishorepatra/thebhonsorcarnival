import { React, useEffect } from "react";
import './App.css';
import logo from './img/logo.png'
import Tilt from 'react-parallax-tilt';
import ConfettiGenerator from "confetti-js";
import avatar from './img/swagbabu.png';


function App() {
  useEffect(() => {
    const confettiSettings = {
      target: "my-canvas",
      respawn: false,
      max: 400,
      clock: 20
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    setTimeout(() => {
      confetti.render();
    }, 0);

    return () => confetti.clear();
  }, []);
  document.body.style.overflowX = "hidden";
  return (
    <>
      <canvas
        id="my-canvas"
        style={{ position: "absolute" }}
      ></canvas>
      <div className='container'>
        <Tilt>
          <img className='demo-img' src={logo} style={{ cursor: "pointer" }} alt="logo" />
        </Tilt>
      </div>
      <h2>Welcome to the first edition of The Bhonsor Carnival</h2>


      <div className='subscribe'>
        <h1>Lorem ipsum is a placeholder text</h1>
        <div class="custom-search">
          <input type="text" class="custom-search-input" placeholder="Enter Your Whatsapp Number" required />
          <button class="custom-search-botton" type="submit">Subscribe</button>
        </div>

        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className="footer">
        <p>©The Bhonsor Carnival 2023</p>
      </div>
    </>
  );
}

export default App;
