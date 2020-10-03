import React from 'react';
import TopMenu from '../components/TopMenu';
import Middle from '../components/Middle';

class HomePage extends React.Component {

  render() {

    return (
        <div>
          <TopMenu/>
          <Middle/>
        </div>
    )
  }
}

export default HomePage;