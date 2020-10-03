import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Segment, Icon, Image } from 'semantic-ui-react';
import profileImg from '../../images/github.jpg';
class Middle extends React.Component{
  render() {

    const space = { marginLeft: "0.2rem" };
    const imgSize ={ width: "45%", marginBottom: "1rem" };
    const pPad ={ paddingTop: "0.5rem", marginBottom: "0" };

    return(
        <div id="menuBG">
          <Container>
            <div className={"bg-text"}>
              <h1 className={'bg-h1'}>MOCHA.PNG</h1>
              <div>
                <Image centered style={imgSize} circular src={profileImg}/>
                <a href={"https://www.youtube.com/"}>
                  <Icon style={space} name={"youtube"} size='big'/>
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

export default Middle;