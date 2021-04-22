import React from 'react'
import {Link} from 'react-router-dom'

const Links = () => {
  return (
    <div className='CenteredNavbar'>
      <div className='logoSection'>
        <Link to='/'>
        <h1>Blog-X</h1>
        </Link>
      </div>
      <ul className='C-N-ul'>
        <Link to='/blog/sports'>
          <li>Sports</li>
        </Link>
        <Link to='/blog/business'>
          <li>Business</li>
        </Link>
        <Link to='/blog/technology'>
          <li>Technology</li>
        </Link>
        <Link to='/blog/health'>
          <li>Health</li>
        </Link>
      </ul>
    </div>
  )
}

export default Links
