import React from 'react';
import _ from 'lodash';
import ProjectsCard from '../components/ProjectsCard';
import { Container } from 'semantic-ui-react';

const importAll = (r) => r.keys().map(r);
let markdownFiles = importAll(require.context('../../data/projects', false, /\.md$/));
markdownFiles = markdownFiles.reverse();

class Projects extends React.Component {


  render() {

    return (
        <div id={'menuBG'}>
          <Container style={{ margin: '10rem 2rem' }}>

            {_.map(markdownFiles, (project, index) => <ProjectsCard
                project={project} key={index}/>)}

          </Container>
        </div>

    )
  }
}

export default Projects;