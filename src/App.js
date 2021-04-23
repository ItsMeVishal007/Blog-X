import './App.css';
import React from 'react';
import Navbar from './component/Navbar/index';
import { Route } from 'react-router-dom';
import BlogPage from './Pages/BlogPages/main/Index';
import Business from './Pages/BlogPages/business';
import Technology from './Pages/BlogPages/technology';
import Sports from './Pages/BlogPages/sports';
import Health from './Pages/BlogPages/health';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import FilterData from './context/CreateContext'
// import { connect } from 'react-redux';


function App() {
  const [ApiData, setApiData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const urlData = await fetch('http://newsapi.org/v2/top-headlines?q=ai&apiKey=1905ac9542f24645868281f04e1538b6')
      const result = await urlData.json()
      setApiData(result.articles);
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      {/* <span>{counter}</span>
      <button onClick={Add}>+</button>
      <button onClick={Sub}>-</button> */}
      <FilterData.Provider value={{ ApiData, setApiData }}>
        <Navbar />
        <Route exact path='/' component={BlogPage} />
        <Route exact path='/blog/technology' component={Technology} />
        <Route exact path='/blog/sports' component={Sports} />
        <Route exact path='/blog/health' component={Health} />
        <Route exact path='/blog/business' component={Business} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/about' component={AboutPage} />
      </FilterData.Provider>
    </div>
  );
}

// const mapStatetoProps = (state) => ({
//   counter: state.counter
// })

// const mapDispatchToProps = (actions) => ({
//   ...actions
// })

export default App;
