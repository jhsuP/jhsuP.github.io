import React from 'react';
import _ from 'lodash';
import ProjectsCard from '../components/ProjectsCard';
import { Container } from 'semantic-ui-react';
import Footer from '../components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const importAll = (r) => r.keys().map(r);
let markdownFiles = importAll(require.context('../../data/projects', false, /\.md$/));
markdownFiles = markdownFiles.reverse();

class Projects extends React.Component {


  render() {

    return (
        <div>
          <Container style={{ margin: '0rem 2rem', paddingTop: '8em' }}>

            {_.map(markdownFiles, (project, index) => <ProjectsCard
                project={project} key={index}/>)}
          </Container>
        </div>

    )
  }
}

export default Projects;