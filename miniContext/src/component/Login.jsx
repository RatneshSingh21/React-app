import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {setUser}=useContext(UserContext);

  let handler = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <>
    <h4>Login</h4>
      <input
        type="text"
        placeholder="User name:"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {' '}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handler}>Submit</button>
    </>
  );
}
