import React from 'react';
import _ from 'lodash';
import internBit from '../../data/projects/2020-07-28 internbit.md';
import Project from '../components/Project';

class InternBit extends React.Component {

  render() {
    return (
        <div>
           <Project project={internBit}/>
        </div>
    )
  }
}

export default InternBit;