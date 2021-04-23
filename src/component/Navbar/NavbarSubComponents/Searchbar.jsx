import React, { useState, useContext } from 'react';
import FilterData from '../../../context/CreateContext'

const Searchbar = () => {
  const { ApiData, setApiData } = useContext(FilterData);
  // const [xdata, setxdata] = useState('');

  // console.log(ApiData)

  const handleChange = (e) => {
    const propsData = e.target.value;
    const ApiFilteredData = ApiData.filter(((data) => { return data.title.toLowerCase().includes(propsData.toLowerCase()) }))
    console.log("api data : ", ApiFilteredData);
    // setxdata(ApiFilteredData)
    setApiData(ApiFilteredData)
  }

  return (
    <form className="SearchBar">
      <input type='text' onChange={handleChange} />
      <button type='submit'><i class="fas fa-search"></i></button>
    </form>
  )
}

export default Searchbar;
// export { searchbarData };
