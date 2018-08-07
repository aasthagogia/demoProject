import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Course from '../../components/Course/Course';
import './CourseOverview.css';
import * as actionTypes from '../../reducer/actions';

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

    render() {
        const courses = this.props.courses.map(course => (
            <Link to="/post/:id" key={course.id}>
                <Course 
                    id={course.id}
                    name={course.name}
                    clicked={() => this.props.onCourseSelected(course.id)} />
            </Link>
        ));
        return (
            <React.Fragment>
                <h1>The Courses are as follows</h1>
                <div className='CourseContent'>{courses}</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        courses: state.response
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCallApi: (data) => dispatch({ type: actionTypes.CALLING_API, response: data }),
        onCourseSelected: (id) => dispatch({ type: actionTypes.SHOW_DETAILS, selectedId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseOverview);