import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {


  return (
    <nav>
      <NavLink 
        to='/bio' 
        className='nav'
      >
        Bio
      </NavLink>
      <NavLink 
        to='/projects' 
        className='nav'
      >
        Projects
      </NavLink>
      <NavLink 
        to='/skills' 
        className='nav'
      >
        Skills
      </NavLink>
      <NavLink 
        to='/resume' 
        className='nav'
      >
        Résumé
      </NavLink>
      <NavLink 
        to='/contact' 
        className='nav'
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default Nav;