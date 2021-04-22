import React from 'react'
import CenteredNavItem from '../Navbar/NavbarSubComponents/CenterNavItem';
import SmLinks from '../Navbar/NavbarSubComponents/Sm.Links';
import Searchbar from '../Navbar/NavbarSubComponents/Searchbar';
import './style.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Searchbar />
      <CenteredNavItem />
      <SmLinks />
    </div>
  )
}

export default Navbar;
