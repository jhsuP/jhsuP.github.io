import React from 'react';
import { Card, Header, Item, Image, Label, Button, Icon } from 'semantic-ui-react';

class ProjectsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    function description(description) {
      try {
        return (
            <span dangerouslySetInnerHTML={{ __html: description }}/>
        );
      } catch (e) {
        console.log('No description field.');
        return '';
      }
    }

    const renderLabels = (tool) => {
      return (
          <Label style={{ backgroundColor: '#00000059', color: 'white' }}>
            {tool}
          </Label>
      )
    };

    return (
        <Item.Group divided
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.10)',
                      padding: '3rem 3rem',
                      marginBottom: '1rem',
                    }}
                    className={'project'}>
          <Item>
            <Item.Image
                src={this.props.project.image}/>
            <Item.Content>
              <Item.Header as='a'>{this.props.project.name}</Item.Header>
              <Item.Meta>
                    <span style={{ color: 'white' }}>
                       {this.props.project.date}

                    </span>
              </Item.Meta>
              <Item.Description style={{ color: 'white' }}>
                {this.props.project.shortDesp}
                {/*{description(this.props.project.description)}*/}
              </Item.Description>
              <Item.Extra>
                {this.props.project.tools.map((skill) => (
                    renderLabels(skill)
                ))}
                <Button floated='right' style={{ backgroundColor: '#3c4044', color: 'white' }}>
                  Read More
                  <Icon name='right chevron'/>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

    )
  }
}

export default ProjectsCard;