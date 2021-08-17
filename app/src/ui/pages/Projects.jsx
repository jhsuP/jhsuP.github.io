import React from 'react';
import _ from 'lodash';
import ProjectsCard from '../components/ProjectsCard';
import { Container, Item } from 'semantic-ui-react';

const importAll = (r) => r.keys().map(r);
let markdownFiles = importAll(require.context('../../data/projects', false, /\.md$/));
markdownFiles = markdownFiles.reverse();

class Projects extends React.Component {


  render() {

    return (
        <div>
          <Container style={{ margin: '0rem 2rem', paddingTop: '8em' }}>
            <Item.Group divided
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          padding: '3rem 3rem',
                          marginBottom: '1rem',
                        }}
                        >

              {_.map(markdownFiles, (project) => <ProjectsCard
                  project={project} key={project}/>)}
            </Item.Group>
          </Container>
        </div>

    )
  }
}

export default Projects;
