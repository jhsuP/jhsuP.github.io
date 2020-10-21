import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import { withRouter } from "react-router-dom";
import SimpleStorage  from "react-simple-storage";
import CodeBlock from './CodeBlock';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    let url = window.location.href;
    url = url.split('/');
    url = url[url.length-1];

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
    const importAll = (r) => r.keys().map(r);
    let markdownFiles = importAll(require.context('../../data/blog', false, /\.md$/));
    markdownFiles = markdownFiles.reverse();
    // console.log(markdownFiles);
    let url = window.location.href;
    url = url.split('/');
    url = url[url.length-1];

    let file = '';

    for (let i = 0; i < markdownFiles.length; i++) {
      if (markdownFiles[i].includes(url.toLowerCase())) {
        file = markdownFiles[i];
      }
    }

    fetch(file).then(res => res.text()).then(
        text =>
            this.setState({
              markdown: text
            }, () => {
              // title: The Rad in RadGrad
              // permalink: essays/radgrad
              // date: 2020-05-22
              // labels: Software Development, Research, RadGrad
              const split = this.state.markdown.split("@@@");
              const title = split[1].split('\n')[1].split(':')[1];
              this.setState({ title: title });
              this.setState({ description: split[2] });
              this.setState({ loading: false });
            })
    );

  }

  render() {
    let url = window.location.href;
    url = url.split('/');
    url = url[url.length-1];

    if (this.state.loading === true) {
      return (
          <Segment placeholder style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>
            <Header icon inverted>
              Loading information...
            </Header>
          </Segment>
      )
    }

    return (
        <div>
          <SimpleStorage parent={this} prefix={url} />
          <Container style={{ margin: '0rem 2rem', paddingTop: '8rem', color: 'white'}}>
            <div style={{backgroundColor: '#ffffff0d', padding: '4rem', fontSize: '17px'}}>
              <Header as={'h1'} inverted textAlign={'center'}>
                {this.state.title}
              </Header>
              <ReactMarkdown escapeHtml={false}
                             source={this.state.description}
                             renderers={{code: CodeBlock}}
              />
            </div>
          </Container>
        </div>

    )
  }
}

export default withRouter(Blog);