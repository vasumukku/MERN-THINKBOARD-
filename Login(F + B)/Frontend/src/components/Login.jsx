import React, { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/login",   
        loginData
      );

      console.log(res.data);
      alert("Login Successful");

    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",backgroundColor:"orange"}}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>

      </form>
    </div>
  );
};

export default Login;