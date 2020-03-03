import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const token = localStorage.getItem('token')
  const logout = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink exact to="/" className='navButton'>
            Home
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/signup" className='navButton'>
            Sign Up
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/map" className='navButton'>
            Map
          </NavLink>
        </li>
        <li style={{cursor: 'pointer'}} onClick={logout} className='navButton'>          
            Logout          
        </li>
      </ul>
    </div>
  );
}