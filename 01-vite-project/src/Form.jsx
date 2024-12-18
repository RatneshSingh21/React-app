function Sub(eve)
{
   eve.preventDefault();
   console.log("submitted....!");
}


export default function For(){
    return(
        <form onSubmit={Sub}>
            <input type="text" placeholder="enter something"/>
            <button>submit..!</button>
        </form>
    );
}