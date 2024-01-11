import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/Navbar'
import News from './Components/News'
// import NewsItem from './Components/NewsItem'

import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

export default class App extends Component {
  // c="John"; // class variable
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
          <Routes>
        {/* Hello My First Class Based Component {this.c} */}
       
        <Route exact path = "/" element={<News key="general" pageSize = {this.pageSize} country="in" category="general"/>}/>
        <Route exact path = "/business" element={<News key="business" pageSize = {this.pageSize} country="in" category="business"/>}/>
        <Route exact path = "/entertainment" element={<News key="" pageSize = {this.pageSize} country="in" category="entertainment"/>}/>
        <Route exact path = "/general" element={<News key="general" pageSize = {this.pageSize} country="in" category="general"/>}/>
        <Route exact path = "/health" element={<News key="health" pageSize = {this.pageSize} country="in" category="health"/>}/>
        <Route exact path = "/science" element={<News key="science" pageSize = {this.pageSize} country="in" category="science"/>}/>
        <Route exact path = "/sports" element={<News key="sports" pageSize = {this.pageSize} country="in" category="sports"/>}/>
        <Route exact path = "/technology" element={<News key="technology" pageSize = {this.pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>

    )
  }
}

