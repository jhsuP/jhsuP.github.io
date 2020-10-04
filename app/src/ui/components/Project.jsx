import React from 'react';
import { Item, Image, Label, Button, Icon, Container, Header } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import { Link } from 'react-router-dom';
import internBit from '../../data/projects/2020-07-28 internbit.md';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      markdown: '',
    }
  };

  markdownLinkRenderer(props) {
    return props.href.startsWith("/") ?
        <a href={props.href}>{props.children}</a> :
        <a href={props.href} target="_blank" rel="nofollow noopener noreferrer">{props.children}</a>;
  }

  componentDidMount() {
    fetch(this.props.project).then(res => res.text()).then(
        text =>
            this.setState({
              markdown: text
            }, () => {
              const split = this.state.markdown.split("@@@");
              const title = split[1].split('\n')[2].split(':')[1];
              this.setState( {title: title } );
              this.setState({ description: split[2] });
            })
    );
  }

  render() {
    return (
        <div id={'menuBG'}>
          <Container style={{ margin: '10rem 2rem' , color: 'white'}}>
            <div style={{backgroundColor: '#ffffff0d', padding: '4rem', fontSize: '17px'}}>
              <Header as={'h1'} inverted textAlign={'center'}>
                {this.state.title}
              </Header>
              <ReactMarkdown escapeHtml={false}
                             source={this.state.description}
                             renderers={{Link : this.markdownLinkRenderer}}
              />
            </div>
          </Container>
        </div>

    )
  }
}

export default Project;