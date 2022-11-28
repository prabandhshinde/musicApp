import React, { useState } from "react";
import "../CSS/Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const Login = () => {
    if (user == "prabandh" && pwd == "12345678") {
      alert("Ok credential");
    } else {
      alert("not ok credential");
    }
  };
  return (
    <div className="container">
      <h1>- Login -</h1>
      <label htmlFor="userId">Enter User Name :</label>
      <input
        type="text"
        id="userId"
        placeholder="userId"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      ></input>
      <h1></h1>
      <label>Enter Password :</label>
      <input
        type="password"
        placeholder="********"
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      ></input>
      <button onClick={Login}>Login</button>
      <h1></h1>
      <h4>Don't have an account?</h4>
      <h3>
        <a href="#">create acoount</a>
      </h3>
    </div>
  );
}

export default Login;
