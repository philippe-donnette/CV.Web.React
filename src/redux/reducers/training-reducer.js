let trainingsReducer = function(trainings = [], action) {
    switch(action.type) {
        case 'GET_TRAININGS':
            return action.trainings;
        default:
            return trainings;
    }
}

export default trainingsReducer