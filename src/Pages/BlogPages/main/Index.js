import React from 'react'
import { Route, Link } from 'react-router-dom';

const BlogPages = (props) => {
  console.log(props)
  return (
    <div>
      <Link to='/contact'>
        BlogPages
      </Link>
    </div>
  )
}

export default BlogPages