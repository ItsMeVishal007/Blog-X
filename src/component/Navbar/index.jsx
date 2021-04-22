import React from 'react'
// import Link from '../Navbar/NavbarSubComponents/Link';
import './style.css';

const Navbar = () => {
  return (
    <div className='Navbar'>

      <form className="SearchBar">
        <input type='text' />
        <button type='submit'><i class="fas fa-search"></i></button>
      </form>

      <div className='CenteredNavbar'>
        <div className='logoSection'>
          <h1>Blog-X</h1>
        </div>
        <ul className='C-N-ul'>
          <li>Sports</li>
          <li>Business</li>
          <li>Technology</li>
          <li>Health</li>
        </ul>
      </div>

      <div className='SM-Links'>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-twitter"></i>
      </div>

    </div>
  )
}

export default Navbar;
