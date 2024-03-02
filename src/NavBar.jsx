import React from 'react'
import './appCss/NavBar.css'

// import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
   <div  className="navbar">
    <h1 id="Name">SUCCULANT</h1>
    
    <div className="floaters" fon>
     <ul>
      <li><a href="">Breakfast</a></li>
      <li><a href="">Lunch</a></li>
      <li><a href="">Dinner</a></li>
     </ul>
    </div>
    <div className="Sign-Up" >
     
       Sign-In 
     
    </div>
   
   </div>
   </>
  );
}

export default NavBar