import React, { Component } from 'react';

import Auxillary from '../../hoc/auxillary';
import { connect } from 'react-redux';

class FullCourse extends Component {
    render(){
        const selectedCourse = this.props.courses[parseInt(this.props.givenId, 10)-1];
        return(
    <Auxillary>
        <div>
            <h3>The Selected Course is: </h3>
        <label>Id : </label>{selectedCourse.id}
    </div>
    <div>
        <label>Name : </label>{selectedCourse.name}
    </div>
    <div>
        <label>Details:  </label>{selectedCourse.details}
    </div>
    </Auxillary>
        );
    }
}

const mapStateToProps = state => {
    return {
        givenId: state.selectedCourseId,
        courses: state.response
    }
}

export default connect(mapStateToProps)(FullCourse);