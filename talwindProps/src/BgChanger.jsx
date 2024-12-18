import { useState } from "react";

export function BgChanger() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap inset-x-0 px-2 justify-center bottom-12">
        <div className="flex flex-wrap justify-center bg-white rounded-3xl px-3 py-2 shadow-lg gap-3">
        <button onClick={()=>setColor("red")}
            className="px-4 outline-none text-white rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={()=>setColor("green")}
            className="px-4 outline-none text-white rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button onClick={()=>setColor("blue")}
            className="px-4 outline-none text-white rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button onClick={()=>setColor("olive")}
            className="px-4 outline-none text-white rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button onClick={()=>setColor("gray")}
            className="px-4 outline-none text-white rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button onClick={()=>setColor("yellow")}
            className="px-4 outline-none text-black rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button onClick={()=>setColor("pink")}
            className="px-4 outline-none text-black rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button onClick={()=>setColor("purple")}
            className="px-4 outline-none text-white rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button onClick={()=>setColor("lavender")}
            className="px-4 outline-none text-black rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button onClick={()=>setColor("white")}
            className="px-4 outline-none text-black rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button onClick={()=>setColor("black")}
            className="px-4 outline-none text-white rounded-full py-1 shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}
