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
        <div id={'menuBG'}>
          <Container style={{ margin: '10rem 2rem' }}>

            {_.map(markdownFiles, (blog, index) => <BlogCard
                blog={blog} key={blog}/>)}

          </Container>
        </div>

    )
  }
}

export default Blog;