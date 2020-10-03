import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './ui/pages/HomePage';
import Projects from './ui/pages/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenu from './ui/components/TopMenu';

function App() {
  return (
      <Router>
        <TopMenu/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/projects' component={Projects}/>
        </Switch>
      </Router>
  );
}

export default App;
