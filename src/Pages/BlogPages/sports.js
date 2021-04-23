import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './sports.css'
const Sports = () => {
const[apiData,setApiData] = useState()

    
 useEffect(() => {
  const fetchData = async() =>{
const urlData =await fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=1905ac9542f24645868281f04e1538b6')
const result = await urlData.json()
// console.log(result.articles)
setApiData(result.articles)
  }

   fetchData()
 }, [])
console.log(apiData)
  return (
    <div className='mainWrapper'>
      <div className='mainContent'>
        Sports Blog
        <div className='article1'>
         
{
  apiData?
apiData.map((data)=>(


          <img style={{ width: '300px' }} src={data.urlToImage} alt='' />
          ))
:
'Loading..'
}
         <div className='headlines'>
          <p></p>


          </div>

        </div>
        <hr />
      </div>

    </div>
  )
}

export default Sports;
