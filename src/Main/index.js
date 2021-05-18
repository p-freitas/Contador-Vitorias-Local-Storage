import React, { useState, useEffect } from "react";
import "./main.css";

import Smash from "../assets/UltimateLogoEN.png";
import Github from "../assets/github.png";


export default function Main() {
  const [countVic, setCountVic] = useState(0);
  const [countDer, setCountDer] = useState(0);
  const winsString = localStorage.getItem('wins');
  const wins = parseInt(winsString, 10);
  const lossesString = localStorage.getItem('losses');
  const losses = parseInt(lossesString, 10);

  const aumentarWins = () => {
    setCountVic(countVic + 1);
    localStorage.setItem('wins', countVic + 1);
  }

  const diminuirWins = () => {
    setCountVic(countVic > 0 ? countVic - 1 : 0);
    localStorage.setItem('wins', countVic - 1);
  }

  const resetarWins = () => {
    setCountVic(0);
    localStorage.setItem('wins', 0);
  }

  const aumentarLosses = () => {
    setCountDer(countDer + 1);
    localStorage.setItem('losses', countDer + 1);
  }

  const diminuirLosses = () => {
    setCountDer(countDer > 0 ? countDer - 1 : 0);
    localStorage.setItem('losses', countDer - 1);
  }

  const resetarLosses = () => {
    setCountDer(0);
    localStorage.setItem('losses', 0);
  }

  useEffect(() => {
    setCountVic(wins)
    setCountDer(losses)
  }, [wins, losses]);

  return (
    <div className="container-all">
      <img className="smash-icon" src={Smash} alt="Logo Smash" />
      <main className="main-container">
        <div className="card">
          <h1 style={{ color: '#3fef14' }}>Wins</h1>
          <div>
            <h1 className="count">{wins}</h1>

            <div className="button-container">
              <button className="btn" style={{ color: '#ff4040' }} onClick={diminuirWins}>-</button>
              <button className="btn-reset" onClick={resetarWins}>reset</button>
              <button className="btn" style={{ color: '#3fef14' }} onClick={aumentarWins}>+</button>
            </div>
          </div>
        </div>
        <div className="card">
          <h1 style={{ color: '#ff4040' }}>Losses</h1>
          <div>
            <h1 className="count-2">{losses}</h1>

            <div className="button-container">
              <button className="btn" style={{ color: '#ff4040' }} onClick={diminuirLosses}>-</button>
              <button className="btn-reset" onClick={resetarLosses}>reset</button>
              <button className="btn" style={{ color: '#3fef14' }} onClick={aumentarLosses}>+</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-container">
        <p className="footer-line">Made by Pedro Freitas</p>
        <ul className="footer-link-container">
          <li className="footer-link">
            <a href="https://github.com/p-freitas">
              <img className="footer-icon" src={Github} alt="Logo Github" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}