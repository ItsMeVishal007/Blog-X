import React from 'react'
import {NavLink} from 'react-router-dom';

const business = () => {
  return (
    <div>
      <NavLink activeClassName='active' to='/contact'>
        business
      </NavLink>
    </div>
  )
}

export default business
