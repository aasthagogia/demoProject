import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CourseOverview from '../CourseOverview/CourseOverview';
// import FullCourse from '../../components/FullCourse/FullCourse';

class Courses extends Component {

    render() {
        // console.log(this.props);
        return (
            <React.Fragment>
                    <Route path='/'  component={CourseOverview} />
            </React.Fragment>
        );
    }
}


export default Courses;