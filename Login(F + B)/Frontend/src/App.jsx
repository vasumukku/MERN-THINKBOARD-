import React from 'react'
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import { useState } from 'react'

const App = () => {
const[state,setState]=useState(true)
  return (
    <div>
      <Navbar />
      {state?<Register state={state} setstate={setState}/>:
        <Login />  
      }
      
    </div>
  )
}

export default App
