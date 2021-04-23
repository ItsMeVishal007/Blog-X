import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NewsCard from '../../../component/NewsCard/NewsCard.component';
import './NewsCardsContainer.css';

const BlogPages = (props) => {
  const [ApiData, setApiData] = React.useState();
  useEffect(() => {
    const fetchData = async () => {
      const urlData = await fetch('http://newsapi.org/v2/top-headlines?q=ai&apiKey=1905ac9542f24645868281f04e1538b6')
      const result = await urlData.json()
      console.log(result.articles)
      setApiData(result.articles);
    }

    fetchData()
  }, [])


  return (
    <div className='NewsCardsContainer'>

      {/* {console.log(ApiData)} */}

      {ApiData ?
        ApiData.map(data => (
          <NewsCard
            image={data.urlToImage}
            Title={data.title}
            description={data.description}
          />
        ))
        : 'Loading...'
      }
    </div>
  )
}

export default BlogPages;