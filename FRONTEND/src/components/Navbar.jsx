import React from 'react'

const Navbar = ({state,setstate}) => {
  return (
    <div>
      <div style={{display:"flex" ,justifyContent:"space-around"}}   className='main-nav-background'>
        <div><h1 className='gradient-text'>Think board</h1></div>
        <div><button style={{backgroundColor:"green" ,padding:"10px",borderRadius:"10px",marginTop:"20px",border:"none",cursor:"pointer"}}  
        onClick={()=>{
          setstate(!state) 
        }} 
        >+ Create notbook</button></div> 
      </div>
    </div>
  )
}

export default Navbar
