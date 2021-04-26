import React,{useState,useEffect} from 'react'
import NewsCard from '../../../component/NewsCard/NewsCard.component';
import BeatLoader from "react-spinners/BeatLoader";


const override = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '0 auto',
  borderColor: 'lightblue'
}


const Sports = (props) => {
  console.log('hello process ' , process.env)
  const [ApiData, setApiData] = React.useState();
  useEffect(() => {
    const fetchData = async () => {
      const urlData = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${process.env.REACT_APP_API_KEY}`)
      const result = await urlData.json()
      setApiData(result.articles);
    }

    fetchData()
  }, [])


  return (
    <div className='NewsCardsContainer'>

      {ApiData ?
        ApiData.map(data => (
          <NewsCard
            image={data.urlToImage}
            Title={data.title}
            description={data.description}
          />
        ))
        : <BeatLoader color={'black'} css={override} size={10} />
      }

    </div>
  )
}

export default Sports;