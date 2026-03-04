import React, { useState } from "react";
import axios from "axios";

const Register = ({ setShowRegister }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/register",
        {
          firstName,
          lastName,
          email,
          password
        }
      );

      console.log(res.data);

      alert("Registered Successfully ✅");

      // After register → go to Login
      setShowRegister(false);

    } catch (error) {
      console.log(error);
      alert("Error storing data");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "orange"
    }}>

      <h2>Register</h2>

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
          Already have account?{" "}
          <span
            style={{
              color: "red",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold"
            }}
            onClick={() => setShowRegister(false)}
          >
            Login here
          </span>
        </label>

        <br /><br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Register;