import { useState } from "react";

// export default function Counter()
// {
//     let count=0;
//     function creaseCount(){
//         count+=1;
//         console.log(count);
//     }
//     return(
//        <div>
//          <p>Count={count}</p>
//          <button onClick={creaseCount}>Press..!</button>
//        </div>
//     )
// }

        //hook
     
export default function Counter()
{
  
  let[count,setCount]=useState(0);
  function creaseCount(){
            setCount(count+1);
            console.log(count);
        }
  return(
           <div>
             <p>Count={count}</p>
             <button onClick={creaseCount}>Press..!</button>
           </div>
        )
}        