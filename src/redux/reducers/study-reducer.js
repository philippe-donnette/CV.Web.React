let studiesReducer = function(studies = [], action) {
    switch(action.type) {
        case 'GET_STUDIES':
            return action.studies;
        default:
            return studies;
    }
}

export default studiesReducer