import React from 'react';
import _ from 'lodash';
import BlogCard from '../components/BlogCard';
import { Container, Item } from 'semantic-ui-react';

const importAll = (r) => r.keys().map(r);
let markdownFiles = importAll(require.context('../../data/blog', false, /\.md$/));
markdownFiles = markdownFiles.reverse();

class Blog extends React.Component {


  render() {

    return (
        <div>
          <Container style={{  margin: '0rem 2rem', paddingTop: '8rem'  }}>
            <Item.Group divided
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          padding: '3rem 3rem',
                          marginBottom: '1rem',
                        }}
            >

              {_.map(markdownFiles, (blog, index) => <BlogCard
                  blog={blog} key={blog}/>)}
            </Item.Group>
          </Container>
        </div>

    )
  }
}

export default Blog;