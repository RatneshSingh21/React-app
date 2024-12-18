import { useEffect, useState } from "react";

export default function Joker(){
    const Url="https://official-joke-api.appspot.com/jokes/random";

    let[joke,setJoke]=useState({});

    const newJoke= async()=>{
        let response=await fetch(Url);
        let jsonResponse=await response.json();
        setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline})
    }
    useEffect(()=>{
        async function getFirstJoke(){
            let response=await fetch(Url);
        let jsonResponse=await response.json();
        setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline})
        }
        getFirstJoke();
    },[])
    return(
        <> 
            <h1>JOKE....!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={newJoke}>Click</button>
        </>
    )
}