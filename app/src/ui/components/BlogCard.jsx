import React from 'react';
import { Item, Label, Button, Icon, Segment, Header } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      description: '',
      date: '',
      slug: '',
      title: '',
      summary: '',
      labels: [],
      loading: true,
    };
  }

  componentDidMount() {

    fetch(this.props.blog).then(res => res.text()).then(
        text =>
            this.setState({
              markdown: text
            }, () => {
              // title: The Rad in RadGrad
              // permalink: essays/radgrad
              // date: 2020-05-22
              // labels: Software Development, Research, RadGrad
              const split = this.state.markdown.split("@@@");
              const labels = split[1].split('\n')[5].split(':')[1].split(',');
              const summary = split[1].split('\n')[4].split(':')[1];
              const date = split[1].split('\n')[3].split(':')[1];
              const slug = split[1].split('\n')[2].split(':')[1];
              const title = split[1].split('\n')[1].split(':')[1];
              this.setState({ date: date });
              this.setState({ slug: slug.trim() });
              this.setState({ title: title });
              this.setState({ labels: labels });
              this.setState({ summary: summary });
              this.setState({ description: split[2] });
              this.setState({ loading: false });
            })
    );
  }

  render() {

    const parseDate = (date) => {
      let parts = date.split('-');
      const newDate = new Date(parts[0], parts[1]-1, parts[2]);
      if (!isNaN(newDate)) {
        return (
            <p>
              {newDate.toDateString()}
            </p>

        )
      }
    };

    const renderLabels = (tool) => {
      return (
          <Label style={{ backgroundColor: '#00000059', color: 'white' }}>
            {tool}
          </Label>
      )
    };

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
        <Item.Group divided
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '3rem 3rem',
                      marginBottom: '1rem',
                    }}
                    className={'project'}>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{this.state.title}</Item.Header>
              <Item.Meta>
                    <span style={{ color: 'white' }}>
                      {parseDate(this.state.date)}
                    </span>
              </Item.Meta>
              <Item.Description style={{ color: 'white' }}>
                {this.state.summary.substring(0, 400)}...
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

export default withRouter(BlogCard);