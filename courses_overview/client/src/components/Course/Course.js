import React from 'react';
// import Auxillary from '../../hoc/auxillary';
import  './Course.css';

const course = (props) => (
    <div className="Course" onClick={props.clicked}>
    <div>
        <label>Id : </label>{props.id}
    </div>
    <div>
        <label>Name : </label>{props.name}
    </div>
    </div>
);

export default course;