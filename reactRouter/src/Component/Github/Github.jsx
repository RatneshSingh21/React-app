import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data=useLoaderData();
//   let [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/RatneshSingh21")
//       .then((response) => response.json()) // Use .json() instead of .json
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center p-4 bg-gray-500 text-white text-3xl m-4">
      {" "}
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RatneshSingh21')
    return response.json()
}
