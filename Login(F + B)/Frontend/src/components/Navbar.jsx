import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex",flexDirection:"row" ,justifyContent:"space-between",backgroundColor:"lightgreen"}}> 
        <div style={{padding:"20px",fontSize:"30px",fontWeight:"bold"}}>Logo</div>
        <div>
          <ul style={{display:"flex",gap:"50px", padding:"20px",listStyle:"none"}}>
            <li>Home</li>
            <li>About</li>
            <li><button style={{padding:"10px 30px", border:"none",borderRadius:"10px",backgroundColor:"blue",fontSize:"20px"}}>Login</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
