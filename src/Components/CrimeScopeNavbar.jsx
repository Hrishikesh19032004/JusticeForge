import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import './Navbar/Navbar.css'
const CrimeScopeNavbar = () => {
  return (
    <>
      <header>
        <div className="container">
          
          <nav>
            <ul>
              <li>
                <NavLink to="/CrimeInIndia">Crime In India</NavLink>
              </li>
              <li>
                <NavLink to="/Stories">Stories</NavLink>
              </li>
              <li>
                <NavLink to="/Cities">Cities</NavLink>
                
              </li>
              <li>
                <NavLink to="/AboutProject">About Project</NavLink>
                
              </li>
              <li>
                <NavLink to="/References">References</NavLink>
                
              </li>
              <li>
                <NavLink to="/Data">Data</NavLink>
                
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <hr />
    </>
  )
}

export default CrimeScopeNavbar

