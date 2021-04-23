import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import NewsCard from '../../../component/NewsCard/NewsCard.component';
import './NewsCardsContainer.css';

const BlogPages = (props) => {
  const [newsTitle,setNewsTitle] = useState()
  const[newsImg,setNewsImg] = useState()
  useEffect(() => {
    const fetchData = async() =>{
  const urlData =await fetch('http://newsapi.org/v2/top-headlines?q=ai&apiKey=1905ac9542f24645868281f04e1538b6')
  const result = await urlData.json()
  // console.log(result.articles)
  setNewsTitle(result.articles[1].title)
  setNewsImg(result.articles.urlToImage)
    }
  
     fetchData()
   }, [])
  console.log(newsTitle,newsImg)
  console.log(props)
  return (
    <div className='NewsCardsContainer'>


      <NewsCard 

    Title = {newsTitle}
    />
      
    </div>
  )
}

export default BlogPages;