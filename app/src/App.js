import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './ui/pages/HomePage';
import About from './ui/pages/About';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import TopMenu from './ui/components/TopMenu';

function App() {
  return (
      <Router>
        <TopMenu/>
        <Route path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
      </Router>
  );
}

export default App;
