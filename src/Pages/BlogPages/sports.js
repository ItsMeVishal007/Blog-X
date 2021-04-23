import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './sports.css'
const Sports = () => {
const[news,setNews] = useState()

    
 useEffect(() => {
  const fetchData = async() =>{
const urlData =await fetch('http://newsapi.org/v2/top-headlines?q=ai&apiKey=1905ac9542f24645868281f04e1538b6')
const result = await urlData.json()
// console.log(result.articles)
setNews(result.articles)
  }

   fetchData()
 }, [news])
console.log(news)
  return (
    <div className='mainWrapper'>
      <div className='mainContent'>
        Sports Blog
        <div className='article1'>
          

          <img style={{ width: '300px' }} src='https://www.cricbuzz.com/a/img/v1/980x654/i1/c205664/over-a-period-of-time-ms-dhon.jpg' alt='' />
         <div className='headlines'>
{/* {
  news.map((d)=>(
    <h3>{d.title}</h3>
  ))
} */}
        
        
          <p>With a drive past cover off Pat Cummins, the CSK opener found his form back and went on to lay the platform for the side's massive total</p>
          </div>

        </div>
        <hr />
      </div>

    </div>
  )
}

export default Sports;
