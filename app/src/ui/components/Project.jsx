import React from 'react';
import { Item, Image, Label, Button, Icon, Container } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    }
  };

  componentDidMount() {

    fetch(this.props.project).then(res => res.text()).then(
        text =>
            this.setState({
              markdown: text
            }, () => {
              const split = this.state.markdown.split("@@@");
              this.setState({ description: split[2] });
            })
    );
  }

  render() {

    return (
        <Container>
          <ReactMarkdown escapeHtml={false}
                         source={this.state.description}/>
                         hmmm
        </Container>

    )
  }
}

export default Project;