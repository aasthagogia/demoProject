import React, { Component } from 'react';
import Course from '../components/Course';

class Courses extends Component{
    render(){
        const courses =[];
        return (
            <div>
                <h1>The Courses are as follows</h1>
                <br>
            {courses.map(course => (
                <Course key={course.id} id={course.id} name={course.name} />
            ))}
            </div>
        );
    }
}

export default Courses;