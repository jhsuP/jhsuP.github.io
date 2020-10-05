import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class TopMenu extends React.Component {
  state = { activeItem: localStorage.getItem('tab') };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem('tab', name);
  };

  componentDidMount(){
    let defaultTab = localStorage.getItem('tab');
    this.setState(()=>({
          defaultTab: defaultTab
        })
    );
  }

  render() {
    const { activeItem } = this.state;

    return (
        <Menu inverted stackable pointing secondary fixed={'top'}
              style={{
                backgroundColor: 'black',
                padding: '0.5rem 0.5rem',
                borderColor: 'transparent',
              }}>
          <Menu.Item
              style={{ marginLeft: 'calc(34%)' }}
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              icon={"user"}
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