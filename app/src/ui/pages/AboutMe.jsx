import React from 'react';
import { Container, Header, Icon, Label } from 'semantic-ui-react';
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
        <div>
          <Container style={{  margin: '0rem 2rem', paddingTop: '7rem', color: 'white' }}>
            <div style={{ backgroundColor: '#ffffff0d', padding: '4rem', fontSize: '17px' }}>
              <Header as={'h1'} inverted textAlign={'center'}>
                Hello! ☕
              </Header>

              <p>
                I am a student studying Computer Science & Social Work at the University of Hawaii
                at Manoa. I was always interested in CS and after taking courses in Social Work, I
                realized how much difference a good and user-friendly software can be when it comes
                to case management and working with marginalized populations. It was then I decided
                that I should tie in both of my passions -- CS and helping others. I am currently
                looking for internships and/or full time positions upon graduation.
              </p>
              <p>
                I use this site as both a professional portfolio, as well as a place to document my
                journey as a CS student. I hope you enjoy your visit here and if you ever want to
                reach out, feel free to contact me at my <a
                  href={'mailto: jhsu2@hawaii.edu'}>email</a> or <a
                  href={'https://www.linkedin.com/in/jennifer-hsu-6788b9153/'}>LinkedIn</a>.
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