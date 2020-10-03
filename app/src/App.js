import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './ui/pages/HomePage';
import About from './ui/pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenu from './ui/components/TopMenu';

function App() {
  return (
      <Router>
        <TopMenu/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </Router>
  );
}

export default App;
