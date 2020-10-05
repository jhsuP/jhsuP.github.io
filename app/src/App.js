import React from 'react';
import './App.css';
import HomePage from './ui/pages/HomePage';
import Projects from './ui/pages/Projects';
import Project from './ui/components/Project';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenu from './ui/components/TopMenu';
import AboutMe from './ui/pages/AboutMe';
import Blog from './ui/pages/Blog';

function App() {
  return (
      <Router>
        <TopMenu/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={AboutMe}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/projects/:name' component={Project}/>
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/blog/:title' component={Project}/>
        </Switch>
      </Router>
  );
}

export default App;
