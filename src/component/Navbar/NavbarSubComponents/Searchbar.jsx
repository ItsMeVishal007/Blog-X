import React, { useState, useContext } from 'react';
import FilterData from '../../../context/CreateContext'

let searchbarData = '';

const Searchbar = () => {
  const { ApiData, setApiData } = useContext(FilterData);
  const [xdata, setxdata] = useState('');

  // console.log(ApiData)

  const handleChange = (e) => {
    const ApiFilteredData = ApiData.filter(((data) => { return data.title.toLowerCase().includes(e.toLowerCase()) }))
    console.log("api data : ", ApiFilteredData);
    setxdata(xdata)
    searchbarData = xdata;
  }


  return (
    <form className="SearchBar">
      <input type='text' onChange={(e) => { handleChange(e.target.value) }} />
      <button type='submit'><i class="fas fa-search"></i></button>
    </form>
  )
}

export default Searchbar;
export { searchbarData };
