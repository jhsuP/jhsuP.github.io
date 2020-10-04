import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import { withRouter } from "react-router-dom";
import SimpleStorage  from "react-simple-storage";


class Project extends React.Component {
  constructor(props) {
    super(props);

    let url = window.location.href;
    url = url.split('/');
    url = url[url.length-1];
    console.log(url)

    if (localStorage.getItem(url + '_description')) {
      const description = localStorage.getItem(url + '_description');
      const title = localStorage.getItem(url + '_title');

      this.state = {
        description: description,
        title: title,
      };

    } else {
      this.state = {
        description: this.props.location.description,
        title: this.props.location.title,
      };
    }

  }

  componentDidMount() {
    if (localStorage.getItem(this.props.location.title + '_description')) {
      const description = localStorage.getItem(this.props.location.title + '_description');
      const title = localStorage.getItem(this.props.location.title + '_title');
    }
  }

  render() {
    let url = window.location.href;
    url = url.split('/');
    url = url[url.length-1];

    return (
        <div id={'menuBG'}>
          <SimpleStorage parent={this} prefix={url} />
          <Container style={{ margin: '10rem 2rem' , color: 'white'}}>
            <div style={{backgroundColor: '#ffffff0d', padding: '4rem', fontSize: '17px'}}>
              <Header as={'h1'} inverted textAlign={'center'}>
                {this.state.title}
              </Header>
              <ReactMarkdown escapeHtml={false}
                             source={this.state.description}
              />
              <Button>
                Go back
              </Button>
            </div>
          </Container>
        </div>

    )
  }
}

export default withRouter(Project);