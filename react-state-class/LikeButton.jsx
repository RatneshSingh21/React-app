import { useState } from "react";

export default function LikeButton()
{
    let [isLike,setIsLike] = useState(false);
    
    let toggleLike=()=>{
        setIsLike(!isLike);
    }
    return(
        <>
        <p onClick={toggleLike}>
         {isLike?(<i class="fa-solid fa-heart"></i>):(<i className="fa-regular fa-heart"></i>)}
        </p>
        </>
    )
}