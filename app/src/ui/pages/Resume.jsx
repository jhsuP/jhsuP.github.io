import React from 'react';
import { Container } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class Resume extends React.Component {

  render() {


    return (
        <div align={'center'}>
          <Container style={{  margin: '0rem 2rem', paddingTop: '8rem', color: 'white' }}>
            <embed src="./Resume.pdf" width="800px" height="1100px"/>
          </Container>
        </div>

    )
  }
}

export default withRouter(Resume);