import React from 'react';
import './App.css';
import Projects from './ui/pages/Projects';
import Project from './ui/components/Project';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenu from './ui/components/TopMenu';
import AboutMe from './ui/pages/AboutMe';
import Blogs from './ui/pages/Blogs';
import Blog from './ui/components/Blog';
import Footer from './ui/components/Footer';
import Resume from './ui/pages/Resume';
import SideBar from './ui/components/SideBar';
import HomePage from './ui/pages/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 770 });
  }

  render() {
    const routes = () => (
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={AboutMe}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/projects/:name' component={Project}/>
          <Route exact path='/blog' component={Blogs}/>
          <Route exact path='/blog/:title' component={Blog}/>
          <Route exact path='/resume' component={Resume}/>
        </Switch>
    );

    const isDesktop = this.state.isDesktop;
    console.log(isDesktop);

    return (
        <Router>
          <TopMenu/>
          <div id={'menuBG'}>
            {isDesktop ? (
                <div>
                  <TopMenu/>
                  {routes()}
                  <Footer/>
                </div>
            ) : (
                <div style={{ display: 'flex', padding: `${10}px` }}>
                  <meta name="viewport" content="width=device-width, maximum-scale=1.5"/>
                  <SideBar visible={this.state.visible}>
                    {routes()}
                    <Footer/>
                  </SideBar>
                </div>
            )}
          </div>
        </Router>
    );
  }
}

export default App;
