import React, { useState } from 'react';
import BollyTile from './components/BollyTile';
import NameTile from './components/NameTile';
import AlphabetTile from './components/AlphabetTile';

function Res(props) {
  return (
    <div className="card text-center floating" style={{backgroundColor:"#e6e6e6"}} hidden={!props.stopGame} z-index='10'>
      <div className="card-body">
        <h5 className="card-title" style={{color:"25f7ed"}}>{props.prompt}</h5>
        <a href="." className="btn btn-primary">New Game</a>
      </div>
        <div className={props.prompt.length<11 ? "firework" : "f"} id="name-tile"></div>
        <div className={props.prompt.length<11 ? "firework" : "f"} id="name-tile"></div>
        <div className={props.prompt.length<11 ? "firework" : "f"} id="name-tile"></div>
        <div className={props.prompt.length<11 ? "firework" : "f"} id="name-tile"></div>
    </div>
  )
}

export default function BollyGame(props) {
    
    let alphaName = new Set();
    let t = "";
    props.title.split(" ").forEach(element => {
      t = element.split('');
      t.forEach(e => {
        alphaName.add(e);
      })
    });
    const[guesses, setGuesses] = useState(new Set());
    let correctGuesses = new Set();
    
  return (
    <div className="position-relative box">
      <div>
        <img src="poster.png" alt="guess the movie" width='400' height='200'></img>
      </div>
      <div className="container my-4">
        {guesses.forEach(e => {alphaName.has(e) ? correctGuesses.add(e) : t = "" })}
        <BollyTile wrongGuesses={guesses.size - correctGuesses.size}/>
      </div>
      <div className="container my-4">
        <NameTile title={props.title} guesses={guesses} setGuesses={setGuesses} correctGuesses={correctGuesses}/>
      </div>
      <div className="container my-4 position-absolute">
        <AlphabetTile guesses={guesses} setGuesses={setGuesses} stopGame={guesses.size - correctGuesses.size >= 9 || correctGuesses.size === alphaName.size} />
      </div>
      <div className="container my-4 position-absolute" >
        <Res prompt={correctGuesses.size===alphaName.size ? "YOU WON!" : "SORRY, YOU LOST! THE MOVIE WAS: " + props.title } stopGame={guesses.size - correctGuesses.size >= 9 || correctGuesses.size === alphaName.size} />
      </div>
    </div>
  )
}
