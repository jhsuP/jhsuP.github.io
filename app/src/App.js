import React from 'react';
import './App.css';
import Middle from './ui/components/Middle';
import Projects from './ui/pages/Projects';
import Project from './ui/components/Project';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenu from './ui/components/TopMenu';
import AboutMe from './ui/pages/AboutMe';
import Blog from './ui/pages/Blog';
import Footer from './ui/components/Footer';
import Resume from './ui/pages/Resume';

function App() {
  return (
      <Router>
        <TopMenu/>
        <div id={'menuBG'}>
          <Switch>
            <Route exact path='/' component={Middle}/>
            <Route exact path='/about' component={AboutMe}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/projects/:name' component={Project}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/blog/:title' component={Project}/>
            <Route exact path='/resume' component={Resume}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
