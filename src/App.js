import { React, useEffect, useState, useRef } from "react";
import './App.css';
import Tilt from 'react-parallax-tilt';
import ConfettiGenerator from "confetti-js";


function App() {
  useEffect(() => {
    const confettiSettings = {
      target: "my-canvas",
      respawn: false,
      max: 400,
      clock: 40
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    setTimeout(() => {
      confetti.render();
    }, 0);

    return () => confetti.clear();
  }, []);
  document.body.style.overflowX = "hidden";

  const [num, setNum] = useState('');
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwgq-Izm8OXw1dDTeQgWjhgiEKrv4UQXHkVYyNAg_Ap0r9f1JgO-jY0wpqdxtakWK1ehQ/exec"

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptUrl, {
      method: 'POST',
      'mode': 'no-cors',
      body: new FormData(formRef.current),

    }).then(res => {
      console.log(setNum())
    })
      .catch(err => console.log(err));
    setNum('');
  }
  return (
    <>
      <canvas
        id="my-canvas"
        style={{ position: "absolute" }}
      ></canvas>
      <div className='container'>
        <Tilt>
          <img className='demo-img' src="https://ik.imagekit.io/dqe4fvjcky/logo_MIJa25Rc6t.png?updatedAt=1681467998214" style={{ cursor: "pointer" }} alt="logo" />
        </Tilt>
      </div>
      <h2>Welcome to the first edition of The Bhonsor Carnival</h2>


      <div className='subscribe'>
        <h1>Kindly Enter Your Phone Number</h1>
        <form onSubmit={handleSubmit} method='post' ref={formRef} name="google-sheet">
          <div class="custom-search">
            <input 
              type="text" 
              class="custom-search-input" 
              placeholder="Enter Your Whatsapp Number" 
              name='Whatsapp-Number'
              onChange={(e) => setNum(e.target.value)}
              value={num} 
              required />
            <button class="custom-search-botton" type="submit" style={{cursor:"pointer", fontSize:"1.1em", color:"black"}}>Submit</button>
          </div>
        </form>

        <div className="avatar">
          <img src="https://ik.imagekit.io/dqe4fvjcky/swagbabu-min_h3wr2hr9Z.png?updatedAt=1681468107228" alt="avatar" />
        </div>
      </div>

      <div className="footer">
        <p>©The Bhonsor Carnival 2023</p>
      </div>
    </>
  );
}

export default App;
