import React from 'react'

export default function BollyTile(props) {
  return (
    <>
      <h1>
        <div className={"badge " + (props.wrongGuesses > 0 ? "bg-secondary" : "bg-primary") + " mx-2"}>B</div>
        <div className={"badge " + (props.wrongGuesses > 1 ? "bg-secondary" : "bg-primary") + " mx-2"}>O</div>
        <div className={"badge " + (props.wrongGuesses > 2 ? "bg-secondary" : "bg-primary") + " mx-2"}>L</div>
        <div className={"badge " + (props.wrongGuesses > 3 ? "bg-secondary" : "bg-primary") + " mx-2"}>L</div>
        <div className={"badge " + (props.wrongGuesses > 4 ? "bg-secondary" : "bg-primary") + " mx-2"}>Y</div>
        <div className={"badge " + (props.wrongGuesses > 5 ? "bg-secondary" : "bg-primary") + " mx-2"}>W</div>
        <div className={"badge " + (props.wrongGuesses > 6 ? "bg-secondary" : "bg-primary") + " mx-2"}>O</div>
        <div className={"badge " + (props.wrongGuesses > 7 ? "bg-secondary" : "bg-primary") + " mx-2"}>O</div>
        <div className={"badge " + (props.wrongGuesses > 8 ? "bg-secondary" : "bg-primary") + " mx-2"}>D</div>
      </h1>
    </>
  )
}
