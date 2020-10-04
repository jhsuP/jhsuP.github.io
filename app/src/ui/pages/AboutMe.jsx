import React from 'react';
import { Container, Header, Label } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class AboutMe extends React.Component {

  render() {

    const skills = [
      'React', 'React Native', 'Node.js', 'Javascript', 'HTML', 'CSS', 'SemanticUI', 'MongoDB',
      'Git', 'Python'
    ];

    const interests = [
        'Full-Stack Development', 'Software Engineering', 'Social Computing', 'Human-Computer Interaction',
      'Psychology', 'Cognitive Science', 'Social Computing'
    ];

    const renderLabels = (skill) => {
      return (
          <Label size={'large'}
                 style={{
                   backgroundColor: '#00000059',
                   color: 'white', margin: '0.4rem'
                 }}>
            {skill}
          </Label>
      )
    };

    return (
        <div id={'menuBG'}>
          <Container style={{ margin: '9rem 2rem 5rem 2rem', color: 'white' }}>
            <div style={{ backgroundColor: '#ffffff0d', padding: '4rem', fontSize: '17px' }}>
              <Header as={'h1'} inverted textAlign={'center'}>
                Hello! ☕
              </Header>

              <p>
                I am a student studying Computer Science & Social Work at the University of Hawaii
                at Manoa. I have experience in React/React Native, MongoDB, and web development. I
                was always interested in CS and after taking courses in Social Work, I realized how
                much difference a good and user-friendly software can be when it comes to case
                management and working with marginalized populations. It was then I decided that I
                should tie in both of my passions -- CS and helping others.
              </p>
              <Header as={'h1'} inverted textAlign={'center'}>
                Skills
              </Header>
              <div align={'center'}>
                {skills.map((skill) => (
                    renderLabels(skill)
                ))}
              </div>
              <Header as={'h1'} inverted textAlign={'center'}>
                Interests
              </Header>
              <div align={'center'}>
                {interests.map((interest) => (
                    renderLabels(interest)
                ))}
              </div>

            </div>
          </Container>
        </div>

    )
  }
}

export default withRouter(AboutMe);