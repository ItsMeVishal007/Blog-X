import React, { useState } from 'react';
import './NewsCard.style.css';
import Button from '../../component/Button/index';

const NewsCard = ({ image, Title , description }) => {
  return (
    <div
      className='NewsCard'
    >
      <div className='image'>
        <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564" alt='messi' />
      </div>

      <div className='otherCardstuff'>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h4>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, odit. Maxime distinctio ad aliquid sint placeat iusto libero magni ducimus deleniti accusamus veniam similique laudantium voluptatibus, sunt velit necessitatibus aperiam dolor reprehenderit beatae pariatur. Deserunt quo blanditiis minus rerum, quibusdam adipisci reiciendis ad quos natus, sequi dolorem optio quod et.</p>
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