import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Segment, Icon, Image } from 'semantic-ui-react';

class TopMenu extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
        <Menu inverted stackable pointing secondary fixed={'top'}
              style={{backgroundColor: 'none',
                padding: '0.5rem 0.5rem',
                borderColor: 'transparent'}}>
          <Menu.Item
              style={{marginLeft: 'calc(40%)'}}
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              icon={"user"}
          />
          <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
              icon={"folder open"}
          />
          <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              icon="address card outline"
          />
        </Menu>
    )
  }
}

export default TopMenu;