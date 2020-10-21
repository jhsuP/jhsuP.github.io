import React from 'react';
import Middle from '../components/Middle';
import { Container, Header, Icon, Image } from 'semantic-ui-react';
import profileImg from '../../images/github.jpg';

class HomePage extends React.Component {

  render() {

    const space = { marginLeft: "0.2rem" };
    const imgSize = { marginBottom: "1rem" };
    const pPad ={ paddingTop: "0.5rem", marginBottom: "0" };

    return (
          <div>
            <Container style={{  margin: '0rem 2rem', paddingTop: '7rem', color: 'white' }}
                       textAlign={'center'}>
              <div style={{ backgroundColor: '#ffffff0d', padding: '4rem', fontSize: '17px',
                borderRadius: '4rem' }}>
                <h1>JENNIFER HSU</h1>
                <div>
                  <Image centered style={imgSize} circular src={profileImg} size={'medium'}/>
                  <a href={"mailto: jhsu2@hawaii.edu"}>
                    <Icon style={space} name={"mail"} size='big'/>
                  </a>
                  <a href={"https://www.linkedin.com/in/jennifer-hsu-6788b9153/"}>
                    <Icon style={space} name={"linkedin"} size='big'/>
                  </a>
                  <a href={"https://github.com/jhsuP"}>
                    <Icon style={space} name={"github"} size='big'/>
                  </a>
                </div>
                <p style={pPad}>CS Student. Video Editor. Cat Enthusiast.</p>
              </div>
            </Container>
          </div>
    )
  }
}

export default HomePage;