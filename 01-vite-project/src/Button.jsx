function doSomethinng() {
    console.log("clicked...");
}
function goSomething(){
    console.log("jaa naa yaha kya aaya h....");
}
export default function Button()
{
    return(
       <div>
        <hr />
        <button onClick={doSomethinng}>click me..!</button>
        <p style={{color:"red"}} onMouseOver={goSomething}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptate?</p>
        <hr />
       </div>
    );
}