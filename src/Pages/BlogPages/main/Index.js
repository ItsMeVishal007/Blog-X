import React from 'react'
import {  NavLink } from 'react-router-dom';

const BlogPages = (props) => {
  console.log(props)
  return (
    <div>
      <NavLink to='/contact'>
        BlogPages
      </NavLink>
     
    </div>
  )
}

export default BlogPages