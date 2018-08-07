import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CourseOverview from '../CourseOverview/CourseOverview';
import FullCourse from '../../components/FullCourse/FullCourse';

class Courses extends Component{

    render(){
        const fullCourse = (this.props.updatedId) ? <FullCourse /> : null;
        return (
            <React.Fragment>
                <Route path='/' exact component={CourseOverview}/>
                <Route path='/post/:id' render={() => fullCourse}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        updatedId: state.selectedCourseId
    }
};

export default connect(mapStateToProps)(Courses);