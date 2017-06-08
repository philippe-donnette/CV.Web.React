let experiencesReducer = function(experiences = [], action) {
    switch(action.type) {
        case 'GET_EXPERIENCES':
            return action.experiences;
        default:
            return experiences;
    }
}

export default experiencesReducer