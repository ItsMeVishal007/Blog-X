import React, {useContext } from 'react'
import NewsCard from '../../../component/NewsCard/NewsCard.component';
import './NewsCardsContainer.css';
import BeatLoader from "react-spinners/BeatLoader";
import FilterData from '../../../context/CreateContext'
// import { searchbarData } from '../../../component/Navbar/NavbarSubComponents/Searchbar'


const override = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '0 auto',
  borderColor: 'lightblue'
}


const BlogPages = (props) => {
  const { ApiData} = useContext(FilterData);

  console.log('this data ', ApiData)

  return (
    <div className='NewsCardsContainer'>
      {
        ApiData ?
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

export default BlogPages;