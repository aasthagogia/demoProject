import React, { Component } from 'react';

// import Auxillary from '../../hoc/auxillary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FullCourse extends Component {

    render(){
        const selectedCourse = this.props.courses[parseInt(this.props.givenId, 10)-1];
        return(
    <React.Fragment>
    <h3>The Selected Course is: </h3>
    <div>
        <h3>Name : </h3>{selectedCourse.name}
    </div>
    <div>
        <h3>Author:  </h3>{selectedCourse.author}
    </div>
    <div>
        <h3>Price:  </h3>{selectedCourse.price}
    </div>
    <div>
        <h3>Date:  </h3>{selectedCourse.date}
    </div>
    <Link to="/">
        <button>Go Back</button>
    </Link>
    </React.Fragment>
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