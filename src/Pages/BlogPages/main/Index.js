import React from 'react'
import { Link } from 'react-router-dom';
import NewsCard from '../../../component/NewsCard/NewsCard.component'

const BlogPages = (props) => {
  console.log(props)
  return (
    <div>
      <NewsCard />
    </div>
  )
}

export default BlogPages;