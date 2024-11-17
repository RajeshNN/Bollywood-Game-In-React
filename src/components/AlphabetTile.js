import React from 'react'

export default function AlphabetTile(props) {
  
  let clickHandler = (e) => {
    let obj = props.guesses;
    obj.add(e.currentTarget.id);
    e.currentTarget.disabled = true;
    props.setGuesses(new Set(obj));
  }
  return (
    <div>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='A' type="button" onClick={clickHandler}>A</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='B' type="button" onClick={clickHandler}>B</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='C' type="button" onClick={clickHandler}>C</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='D' type="button" onClick={clickHandler}>D</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='E' type="button" onClick={clickHandler}>E</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='F' type="button" onClick={clickHandler}>F</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='G' type="button" onClick={clickHandler}>G</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='H' type="button" onClick={clickHandler}>H</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='I' type="button" onClick={clickHandler}>I</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='J' type="button" onClick={clickHandler}>J</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='K' type="button" onClick={clickHandler}>K</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='L' type="button" onClick={clickHandler}>L</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='M' type="button" onClick={clickHandler}>M</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='N' type="button" onClick={clickHandler}>N</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='O' type="button" onClick={clickHandler}>O</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='P' type="button" onClick={clickHandler}>P</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='Q' type="button" onClick={clickHandler}>Q</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='R' type="button" onClick={clickHandler}>R</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='S' type="button" onClick={clickHandler}>S</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='T' type="button" onClick={clickHandler}>T</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='U' type="button" onClick={clickHandler}>U</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='V' type="button" onClick={clickHandler}>V</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='W' type="button" onClick={clickHandler}>W</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='X' type="button" onClick={clickHandler}>X</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='Y' type="button" onClick={clickHandler}>Y</button>
      <button className="btn btn-primary mx-2 my-2" disabled={props.stopGame} id='Z' type="button" onClick={clickHandler}>Z</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='1' type="button" onClick={clickHandler}>1</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='2' type="button" onClick={clickHandler}>2</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='3' type="button" onClick={clickHandler}>3</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='4' type="button" onClick={clickHandler}>4</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='5' type="button" onClick={clickHandler}>5</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='6' type="button" onClick={clickHandler}>6</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='7' type="button" onClick={clickHandler}>7</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='8' type="button" onClick={clickHandler}>8</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='9' type="button" onClick={clickHandler}>9</button>
      <button className="btn btn-warning mx-2 my-2" disabled={props.stopGame} id='0' type="button" onClick={clickHandler}>0</button>
    </div>
  )
}
