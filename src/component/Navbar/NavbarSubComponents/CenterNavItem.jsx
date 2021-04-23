import React from 'react'
import {NavLink} from 'react-router-dom'
// import '../style.css'
const NavLinks = () => {
  return (
    <div className='CenteredNavbar'>
      <div className='logoSection'>
        <NavLink  to='/'>
        <h1>News-X</h1>
        </NavLink>
      </div>
      <ul className='C-N-ul'>
        <NavLink  to='/blog/sports'>
          <li>Sports</li>
        </NavLink>
        <NavLink to='/blog/business'>
          <li>Business</li>
        </NavLink>
        <NavLink to='/blog/technology'>
          <li>Technology</li>
        </NavLink>
        <NavLink to='/blog/health'>
          <li>Health</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default NavLinks
