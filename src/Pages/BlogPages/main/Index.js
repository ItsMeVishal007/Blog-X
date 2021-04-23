import React from 'react'
import { Link } from 'react-router-dom';
import NewsCard from '../../../component/NewsCard/NewsCard.component';
import './NewsCardsContainer.css';

const BlogPages = (props) => {
  console.log(props)
  return (
    <div className='NewsCardsContainer'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  )
}

export default BlogPages;