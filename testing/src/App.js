import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);

  const manageStrikes = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
      setBalls(0);
      setFouls(0);
    }
  }

  const manageBalls = () => {
    if (balls < 4) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
    }
  }

  const manageFouls = () => {
    if (strikes < 2) {
      setFouls(fouls + 1);
      setStrikes(strikes + 1);
    } else {
      setFouls(fouls + 1);
    }
  }

  const manageHits = () => {
    setStrikes(0);
    setBalls(0);
    setFouls(0);
  }

  return (
    <div>
      <h1>Baseball Game</h1>
      <div><strong>DISPLAY</strong></div>
      <div>Strikes: {strikes}</div>
      <div>Balls: {balls}</div>
      <div>Foulballs: {fouls}</div>
      <br></br>
      <br></br>
      <div><strong>DASHBOARD</strong></div>
      <button onClick={manageStrikes}>Strikes</button>
      <button onClick={manageBalls}>Balls</button>
      <button onClick={manageFouls}>Fouls</button>
      <button onClick={manageHits}>Hit</button>
    </div>
  );
}

export default App;
