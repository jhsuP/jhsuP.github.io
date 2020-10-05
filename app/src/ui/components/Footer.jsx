import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Grid, List } from 'semantic-ui-react';

class Footer extends React.Component {

  render() {

    return (
        <div style={{
          marginTop: '4rem',
          marginBottom: '4rem',
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: 'white',
          bottom: 0,
        }}>
          <Grid container centered>
            © Jennifer Hsu 2020
          </Grid>
        </div>

    )
  }
}

export default Footer;