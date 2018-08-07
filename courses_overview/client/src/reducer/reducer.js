import * as actionTypes from './actions'; 

const initialState ={
    response: [],
    selectedCourseId : ''
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
    }
    default:
    return state;
}

}

export default reducer;