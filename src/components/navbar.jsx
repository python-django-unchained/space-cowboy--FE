import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink to="/home" className='navButton'>
            Home
          </NavLink>
        </li>
        <li>
        <NavLink to="/signup" className='navButton'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className='navButton'>
            Login
          </NavLink>
        </li>
        <li>          
            Logout          
        </li>
      </ul>
    </div>
  );
}