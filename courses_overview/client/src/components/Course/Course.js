import React from 'react';
// import Auxillary from '../../hoc/auxillary';
import  './Course.sass';
// import Simple from '../Cards/Simple';

const course = (props) => (
    <div className="Course" onClick={props.clicked}>
    <div>
        <label>Name : </label>{props.name}
    </div>
    <div>
        <label>Author:  </label>{props.author}
    </div>
    </div>
);

export default course;