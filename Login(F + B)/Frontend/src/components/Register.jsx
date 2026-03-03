import React, { useState } from "react";
import axios from "axios";

const Register = ({state,setstate}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();   

    const userData = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/register",
        userData
      );

      console.log(res.data);
      // alert("Data Stored Successfully");
      setstate(!state)

    } catch (error) {
      console.log(error);
      alert("Error storing data");
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",backgroundColor:"orange"}}>
      <h2>Simple Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <label>
  click here{" "}
  <span
    style={{
      color: "red",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: "bold"
    }}
    onClick={() => {
      setstate(!state);
    }}
  >
    already account
  </span>
</label>
     <br /> <br />
        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Register;