import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import Course from '../../components/Course/Course';
import './CourseOverview.sass';
import * as actionTypes from '../../reducer/actions';
import FullCourse from '../../components/FullCourse/FullCourse';
// import Simple from '../../components/Cards/Simple';
import {} from '';

class CourseOverview extends Component {

    componentDidMount() {
        this.callApi();
    }

    callApi = () => {
        axios.get('/api/courses').then(response => {
            if (response.status !== 200) throw Error(response.statusText);
            this.props.onCallApi(response.data);
        })
            .catch(err => console.log(err));
    };

    componentWillReceiveProps = (nextProps) => {
        this.props.incrementCount();
    }

    render() {
        const courses = this.props.courses.map(course => (
            <Link to={'/' +course._id} key={course._id}>
                <Course 
                    author={course.author}
                    name={course.name}
                    clicked={() => this.props.onCourseSelected(course._id)} />
            </Link>
        ));
        return (
            <React.Fragment>
                <h1>The Courses are as follows</h1>
                <div>Count: {this.props.count}</div>
                <div className='course-overview'>{courses}</div>
                <Route path='/:id' exact component={FullCourse} />
                {/* <Simple></.Simple> */}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        courses: getCourses(),
        count: state.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: (data) => dispatch({ type: actionTypes.CALLING_API, response: data }),
        onCourseSelected: (id) => dispatch({ type: actionTypes.SHOW_DETAILS, selectedId: id }),
        incrementCount: () => dispatch({type: actionTypes.INCREMENTING_COUNT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseOverview);