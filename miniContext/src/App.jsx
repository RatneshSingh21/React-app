
import "./App.css";
import Login from "./component/Login";
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./component/Profile"

function App() {
  

  return (
    <UserContextProvider>
       <h1>context</h1>
       <Login/>
       <Profile/>
    </UserContextProvider>
  );
}

export default App;
