import React from 'react';

import './Button.styles.css'

const Button = ({ text, width, height, backgroundColor, fontSize, color }) => {
  const [bgvalue , setBgValue] = React.useState(false)
  return (
    <button
      className='btn'
      onMouseEnter={()=>{setBgValue(true)}}
      onMouseLeave={()=>{setBgValue(false)}}
      style={
        {
          backgroundColor : bgvalue ? 'white' : 'black',
          width: width,
          height:height,
          fontSize:fontSize,
          color: bgvalue ? 'black' : 'white',
        }}
    >
      {text}
    </button>
  )
}

export default Button
