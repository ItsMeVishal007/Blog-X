import React, { useState, useEffect } from 'react';
import './NewsCard.style.css';
import Button from '../../component/Button/index';

const NewsCard = ({ image, Title, description }) => {

  return (
    <div
      className='NewsCard'
    >
      <div className='image'>
        <img src={image} alt='' />
      </div>

      <div className='otherCardstuff'>
        <h4>
          {Title}
        </h4>
        <p>{description}</p>
        <Button
          className='button'
          text='Read Now'
          height='30px'
          width='100px'
          backgroundColor='black'
          color='white'
        />
      </div>

    </div>
  )
}

export default NewsCard;
//