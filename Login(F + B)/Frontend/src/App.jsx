import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  // ✅ Check token when app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Navbar />

      {isLoggedIn ? (
        <div style={{textAlign:"center", marginTop:"100px"}}>
          <h2 style={{color:"green"}}>Already Logged In ✅</h2>
          <button onClick={()=>{
            localStorage.removeItem("token");
            setIsLoggedIn(false);
          }}>
            Logout
          </button>
        </div>
      ) : showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}

    </div>
  );
};

export default App;