import React from 'react';
import _ from 'lodash';
import TopMenu from '../components/TopMenu';
import projectFile from '../../data/projects.json';
import ProjectsCard from '../components/ProjectsCard';
import { Container } from 'semantic-ui-react';
import internbit from '../../data/projects/internbit.md'

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../../data/projects', false, /\.md$/));

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