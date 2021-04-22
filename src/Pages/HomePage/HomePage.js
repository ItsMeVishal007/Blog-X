import React from 'react';
import { Route , Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Link to='/about'>
      HomePage
      </Link>
    </div>
  )
}

export default HomePage
