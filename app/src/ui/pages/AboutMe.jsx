import React from 'react';
import { Container, Header, Label } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class AboutMe extends React.Component {

  render() {

    const skills = [
      'React', 'React Native', 'Node.js', 'Javascript', 'HTML', 'CSS', 'SemanticUI', 'MongoDB',
      'Git', 'Python', 'Vue', 'Java'
    ];

    const interests = [
      'Full-Stack Development', 'Software Engineering', 'Social Computing', 'Human-Computer Interaction',
      'Psychology', 'Cognitive Science', 'Front-End Development', 'Mobile Development'
    ];

    const renderLabels = (skill) => {
      return (
          <Label size={'large'}
                 style={{
                   backgroundColor: '#00000059',
                   color: 'white', margin: '0.4rem'
                 }}
          key={skill}>
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
                I graduated on May 2021 from University of Hawaii at Manoa and got my Bachelors in Computer &
                Information Science and Social Work. I was always interested in CS and after taking
                courses in Social Work, I realized how much difference a good and user-friendly software
                can be when it comes to working with marginalized populations. It was then I decided that
                I should tie in both of my passions -- CS, healthcare, and helping others.
              </p>
              <p>
                I use this site as both a professional portfolio, as well as a place to document my
                journey as a Junior Software Developer. I hope you enjoy your visit here and if you
                ever want to reach out, feel free to contact me at my <a
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
                {interests.map((interest, index) => (
                    renderLabels(interest, index)
                ))}
              </div>

            </div>
          </Container>
        </div>

    )
  }
}

export default withRouter(AboutMe);
