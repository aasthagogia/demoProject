import * as actionTypes from './actions'; 
import * as selectors from './selectors';

const initialState ={
    response: [],
    selectedCourseId : '',
    count: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type){
    case actionTypes.SHOW_DETAILS:
    return {
        ...state,
        selectedCourseId: action.selectedId
    };
    case actionTypes.CALLING_API:
    return {
        ...state,
        response: action.response
    };
    case actionTypes.INCREMENTING_COUNT:
    return{
        ...state,
        count: state.count + 1
    };
    default:
    return state;
    }
}

export const getCourses = (state) => selectors.getCourses(state.response);

export default reducer;