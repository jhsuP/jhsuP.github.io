import React from 'react';
import _ from 'lodash';
import TopMenu from '../components/TopMenu';
import projectFile from '../../data/projects.json';
import ProjectsCard from '../components/ProjectsCard';
import { Container } from 'semantic-ui-react';

class Projects extends React.Component {

  render() {


    return (
        <div id={'menuBG'}>
          <Container style={{ marginTop: '10rem' }}>

            {_.map(projectFile, (project, index) => <ProjectsCard
                project={project} key={index}/>)}

            {/*<Item.Group divided*/}
            {/*            style={{*/}
            {/*              backgroundColor: 'rgba(255, 255, 255, 0.10)',*/}
            {/*              padding: '3rem 3rem',*/}
            {/*              marginBottom: '1rem',*/}
            {/*            }}*/}
            {/*            className={'project'}>*/}
            {/*  <Item>*/}
            {/*    <Item.Image*/}
            {/*        src='https://jhsup.github.io/images/internbit-logo.png'/>*/}
            {/*    <Item.Content>*/}
            {/*      <Item.Header as='a'>InternBit</Item.Header>*/}
            {/*      <Item.Meta>*/}
            {/*        <span style={{ color: 'white' }}>*/}
            {/*          2020-07-28*/}
            {/*        </span>*/}
            {/*      </Item.Meta>*/}
            {/*      <Item.Description style={{ color: 'white' }}>*/}
            {/*        InternBit is a web application that seeks to make internship searching easier.*/}
            {/*      </Item.Description>*/}
            {/*      <Item.Extra>*/}
            {/*        <Label style={{backgroundColor: '#00000059', color: 'white'}}>*/}
            {/*          React.js*/}
            {/*        </Label>*/}
            {/*        <Label>Web Scraping</Label>*/}
            {/*        <Label>Summer Research Project</Label>*/}
            {/*        <Button  floated='right' style={{backgroundColor: '#3c4044', color: 'white'}}>*/}
            {/*          Read More*/}
            {/*          <Icon name='right chevron'/>*/}
            {/*        </Button>*/}
            {/*      </Item.Extra>*/}
            {/*    </Item.Content>*/}
            {/*  </Item>*/}
            {/*</Item.Group>*/}

          </Container>
        </div>

    )
  }
}

export default Projects;