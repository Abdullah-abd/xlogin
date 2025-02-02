import { useState } from "react";
import "./App.css";

function App() {
  const [message,setMessage]=useState("")
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loginMessage,setLoginMessage]=useState("")
  const handleLogin = (e)=>{
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    if (username === "user" && password === "password") {
      setLoginMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  }
  return (
    <div className="App">
      {message && <p>{message}</p>}
      {
        !loginMessage && (<form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column", width:"300px",alignItems:"center"}}>
        <label for="username">UserName:</label>
        <input type="text" required placeholder="username" id="username" value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        <label for="password">Password:</label>
        <input type="password" required placeholder="password" id="password"  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>)
      }
      {
        loginMessage && <p>{loginMessage}</p>
      }
    </div>
  );
}

export default App;
