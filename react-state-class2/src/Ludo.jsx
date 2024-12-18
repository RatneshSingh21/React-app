import { useState } from "react"

export default function Ludo(){
    let[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});

    let updateBlue = () =>{
        moves.blue+=1;
        setMoves({...moves});
    }

    let updateYellow = () =>{
        moves.yellow+=1;
        setMoves({...moves});
    }

    let updateGreen = () =>{
        moves.green+=1;
        setMoves({...moves});
    }

    let updateRed = () =>{
        moves.red+=1;
        setMoves({...moves});
    }

    return(
        <>
        <div className="bf">
          <h1>Games Begin.......!</h1>
          <div className="board">
              <p>Blue Moves ={moves.blue}</p>
              <button style={{backgroundColor:"blue", color:"white"}} onClick={updateBlue}>+1</button>
              <p>Yellow Moves = {moves.yellow}</p>
              <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
              <p>Green Moves ={moves.green}</p>
              <button style={{backgroundColor:"green", color:"white"}} onClick={updateGreen}>+1</button>
              <p>Red Moves ={moves.red}</p>
              <button style={{backgroundColor:"red", color:"white"}} onClick={updateRed}>+1</button>
        </div>
        </div>
      </>
    )
}