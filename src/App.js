import './App.css';
import React from 'react';
import Navbar from './component/Navbar/index';
import { Route , Link } from 'react-router-dom';
import BlogPage from './Pages/BlogPages/main/Index';
import Business from './Pages/BlogPages/business';
import Technology from './Pages/BlogPages/technology';
import Sports from './Pages/BlogPages/sports';
import Health from './Pages/BlogPages/health';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Homepage from './Pages/HomePage/HomePage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/blog/technology' component={Technology} />
      <Route exact path='/blog/sports' component={Sports} />
      <Route exact path='/blog/health' component={Health} />
      <Route exact path='/blog/business' component={Business} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/about' component={AboutPage} />
    </div>
  );
}

export default App;
