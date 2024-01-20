import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const handleuser = (e) => {
    setUserInput(e.target.value);
  };
  const handleuserpassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput === ""){
    alert("Please enter username ");
    return
    }else if ( userpassword === "" ){
      alert("Please enter password")
      return
    }

     
    
    console.log("Username:", userInput);
    console.log("Password:", userpassword);

    localStorage.setItem("username", userInput);
    localStorage.setItem("password", userpassword);
  
    setUserInput('');
    setUserPassword('');
  };

  return (
    <div className="formContainer">
      <h1>Log-In Forms</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            {" "}
            Username :
            <input
              className="setinput"
              type="text"
              placeholder="Write your email"
              value={userInput}
              onChange={handleuser}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password :
            <input
              className="setinput"
              type="password"
              placeholder="Write your password"
              value={userpassword}
              onChange={handleuserpassword}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
