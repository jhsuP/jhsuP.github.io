import React from 'react';
import _ from 'lodash';
import ProjectsCard from '../components/ProjectsCard';
<<<<<<< HEAD
import { Container, Item } from 'semantic-ui-react';
import Footer from '../components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import { Container } from 'semantic-ui-react';
>>>>>>> parent of 06d3b22... added resume

const importAll = (r) => r.keys().map(r);
let markdownFiles = importAll(require.context('../../data/projects', false, /\.md$/));
markdownFiles = markdownFiles.reverse();

class Projects extends React.Component {


  render() {

    return (
<<<<<<< HEAD
        <div>
          <Container style={{ margin: '0rem 2rem', paddingTop: '8em' }}>
            <Item.Group divided
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          padding: '3rem 3rem',
                          marginBottom: '1rem',
                        }}
                        >

              {_.map(markdownFiles, (project, index) => <ProjectsCard
                  project={project} key={index}/>)}
            </Item.Group>
=======
        <div id={'menuBG'}>
          <Container style={{ margin: '10rem 2rem' }}>

            {_.map(markdownFiles, (project, index) => <ProjectsCard
                project={project} key={index}/>)}

>>>>>>> parent of 06d3b22... added resume
          </Container>
        </div>

    )
  }
}

export default Projects;