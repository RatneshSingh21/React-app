
import { useParams } from "react-router-dom";

export default function User() {
 
  const { userid } = useParams();
  return (
    <>
      <div className="text-center p-4 m-4 bg-gray-600 text-white text-3xl">
        User:{userid}
      </div>
    </>
  );
}
