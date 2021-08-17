import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid} from 'semantic-ui-react';

class Footer extends React.Component {

  render() {

    const currentDate = new Date();

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
            © Jennifer Hsu {currentDate.getFullYear()}
          </Grid>
        </div>

    )
  }
}

export default Footer;
