import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: localStorage.getItem('tab'),
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem('tab', name);
  };

  // removeNavHistory = ()  => {
  //   const tab = window.location.pathname;
  //   if (tab.split('/')[1].length !== 0) {
  //     localStorage.setItem('tab', tab);
  //   } else {
  //     localStorage.setItem('tab', 'home');
  //   }
  // }
  //
  // componentWillUnmount() {
  //   window.addEventListener('beforeunload', this.removeNavHistory);
  // }

  componentDidMount(){
    const tab = window.location.pathname;
    let defaultTab = tab;
    if (tab.split('/')[1].length !== 0) {
      localStorage.setItem('tab', tab.split('/')[1]);
      defaultTab = tab.split('/')[1];
    } else {
      defaultTab = 'home';
      localStorage.setItem('tab', 'home');
    }
    this.setState(()=>({
          activeItem: defaultTab
        })
    );
  }

  render() {
    const { activeItem } = this.state;

    return (
        <Menu inverted stackable pointing secondary fixed={'top'} className={'navBar'}
              style={{
                backgroundColor: 'black',
                padding: '0.5rem 0.5rem',
                borderColor: 'transparent',
                fontVariantCaps: 'all-small-caps'
              }}>
          <Menu.Item
              // style={{ marginLeft: 'calc(34%)' }}
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              icon={"home"}
              as={ Link }
              to='/'
          />
          <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              icon={"user"}
              as={ Link }
              to='/about'
          />
          <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
              icon={"code"}
              as={ Link }
              to='/projects'
          />
          <Menu.Item
              name='blog'
              active={activeItem === 'blog'}
              onClick={this.handleItemClick}
              icon="book"
              as={ Link }
              to='/blog'
          />
          <Menu.Item
              name='resume'
              active={activeItem === 'resume'}
              onClick={this.handleItemClick}
              icon="file code"
              as={ Link }
              to='/resume'
          />
        </Menu>
    )
  }
}

export default withRouter(TopMenu);
