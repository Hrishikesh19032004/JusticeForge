import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/HammerIcon.png';
import './Navbar.css';
// import { useAuth } from '../store/auth';

import { Navbar as FlowbiteNavbar } from 'flowbite-react'; // Renamed imported Navbar

const Navbar = () => {
//   const { isLoggedIn, isLoading } = useAuth();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/" style={{color:'#dee2e6'}}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height: '40px',
                  marginRight: '10px',
                  marginBottom: '-5px',
                }}
              />
              JusticeForge
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/CrimeScope">CrimeScope</NavLink>
                
              </li>
              <li>
                <NavLink to="/Courses">Courses</NavLink>
                
              </li>
              <li>
                <NavLink to="/Consultation">Consultation</NavLink>
                {/*Lawyer Types and there connections*/}
              </li>
              <li>
                <NavLink to="/TrialTactics">Trial Tactics</NavLink>
                
              </li>
              <li>
                <NavLink to="/SignInUp">SignInUp</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
