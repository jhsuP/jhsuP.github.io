import React from 'react';
import _ from 'lodash';
import BlogCard from '../components/BlogCard';
import { Container } from 'semantic-ui-react';

const importAll = (r) => r.keys().map(r);
let markdownFiles = importAll(require.context('../../data/blog', false, /\.md$/));
markdownFiles = markdownFiles.reverse();

class Blog extends React.Component {


  render() {

    return (
        <div>
          <Container style={{  margin: '0rem 2rem', paddingTop: '8rem'  }}>

            {_.map(markdownFiles, (blog, index) => <BlogCard
                blog={blog} key={blog}/>)}

          </Container>
        </div>

    )
  }
}

export default Blog;