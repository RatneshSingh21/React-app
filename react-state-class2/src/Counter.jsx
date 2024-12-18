import { useState,useEffect } from "react";

export default function Counter()
{
    let[count,setCount]=useState(0);

    let insCount=()=>{
        setCount((curCount)=>curCount+1);
    }
    useEffect(function printSomething(){
        console.log("hogya");
    })
    return(
        <>
            <h2>count ={count}</h2>
            <button onClick={insCount}>+1</button>
        </>
    )
}