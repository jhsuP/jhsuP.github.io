import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Sidebar, Icon, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: localStorage.getItem('tab'),
      visible: false,
    }
  }

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

    const setVisible = (state) => {
      this.setState({ visible: state });
    };

    return (
        <div>
          <Menu borderless inverted fixed={'top'} className={'mobileBar'}>
            <Menu.Item position={'left'}>
              <div onClick={() => setVisible(!this.state.visible)} style={{ padding: '5px' }}>
                <Icon name='bars'/>
              </div>
            </Menu.Item>
          </Menu>
          <Sidebar.Pushable as={Segment} className={'sideBar'}>
            <Sidebar
                style={{ paddingTop: '3rem !important', backgroundColor: 'rgb(0,0,0)' }}
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                onHide={() => setVisible(false)}
                visible={this.state.visible}
                width='thin'
            >
              <Menu inverted stackable pointing secondary fixed={'top'}
                    style={{
                      backgroundColor: 'black',
                      padding: '4rem 0.5rem',
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
            </Sidebar>
            <Sidebar.Pusher style={{ paddingTop: '5rem', paddingLeft: '2rem' }}>
              {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>

    )
  }
}

export default withRouter(SideBar);