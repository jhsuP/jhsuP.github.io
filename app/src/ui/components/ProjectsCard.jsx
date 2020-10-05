import React from 'react';
import { Item, Label, Button, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class ProjectsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      description: '',
      summary: '',
      date: '',
      slug: '',
      title: '',
      img: '',
      labels: [],
      loading: true,
    };
  }

  componentDidMount() {

    fetch(this.props.project).then(res => res.text()).then(
        text =>
            this.setState({
              markdown: text
            }, () => {
              const split = this.state.markdown.split("@@@");
              const labels = split[1].split('\n')[6].split(':')[1].split(',');
              const summary = split[1].split('\n')[5].split(':')[1];
              const date = split[1].split('\n')[4].split(':')[1];
              const slug = split[1].split('\n')[3].split(':')[1];
              const title = split[1].split('\n')[2].split(':')[1];
              const img = split[1].split('\n')[1].split(':')[1];
              this.setState({ summary: summary });
              this.setState({ date: date });
              this.setState({ slug: slug.trim() });
              this.setState({ title: title });
              this.setState({ img: img.trim() });
              this.setState({ labels: labels });
              this.setState({ description: split[2] });
              this.setState({ loading: true });
            })
    );
  }

  render() {

    const renderLabels = (tool) => {
      return (
          <Label style={{ backgroundColor: '#00000059', color: 'white' }}>
            {tool}
          </Label>
      )
    };

    if (this.state.loading === false) {
      return (
          <p/>
      )
    }

    return (
        <Item.Group divided
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '3rem 3rem',
                      marginBottom: '1rem',
                    }}
                    className={'project'}>
          <Item>
            <Item.Image
                src={this.state.img}/>
            <Item.Content>
              <Link to={{
                pathname: this.state.slug,
                description: this.state.description,
                title: this.state.title,
              }}>
                <Item.Header as='a'>{this.state.title}</Item.Header>
              </Link>
              <Item.Meta>
                    <span style={{ color: 'white' }}>
                       {/*{this.props.project.date}*/}
                      {this.state.date}
                    </span>
              </Item.Meta>
              <Item.Description style={{ color: 'white' }}>
                {this.state.summary}
              </Item.Description>
              <Item.Extra>
                {this.state.labels.map((skill) => (
                    renderLabels(skill)
                ))}
                <Link to={{
                  pathname: this.state.slug,
                  description: this.state.description,
                  title: this.state.title,
                }}>
                  <Button floated='right'
                          style={{ backgroundColor: '#3c4044', color: 'white' }}>
                    Read More
                    <Icon name='right chevron'/>
                  </Button>
                </Link>

              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

    )
  }
}

export default withRouter(ProjectsCard);