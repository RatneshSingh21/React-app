import { useState } from "react";
import Winning from "./Winning";
import Lose from "./Lose";

export default function Lottery(){
    let[ticketNumber,setTicketNumber]= useState("");
    let ticket=()=>{
        const number = Math.floor(Math.random() * 1000); 
    const formattedNumber = number.toString().padStart(3, '0'); 
    console.log(formattedNumber);
    setTicketNumber(formattedNumber);
    }

    function sumOfDigits(number) {
        
        const digits = number.toString().split('').map(Number);
      
       
        const sum = digits.reduce((acc, digit) => acc + digit, 0);
      
        return sum;
      }
    return(
        <>
       <h1>Lottery Game</h1>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       <button onClick={ticket}>Generate Ticket</button>
       <h3>Lottery Ticket ={ticketNumber}</h3>
       {ticketNumber && (
        sumOfDigits(ticketNumber) === 15 ? <Winning /> : <Lose />
      )}
    </>
    )
}