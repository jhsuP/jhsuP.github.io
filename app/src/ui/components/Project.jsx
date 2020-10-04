import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

class Project extends React.Component {

  render() {
    return (
        <div id={'menuBG'}>
          <Container style={{ margin: '10rem 2rem' , color: 'white'}}>
            <div style={{backgroundColor: '#ffffff0d', padding: '4rem', fontSize: '17px'}}>
              <Header as={'h1'} inverted textAlign={'center'}>
                {this.props.location.title}
              </Header>
              <ReactMarkdown escapeHtml={false}
                             source={this.props.location.description}
              />
            </div>
          </Container>
        </div>

    )
  }
}

export default Project;