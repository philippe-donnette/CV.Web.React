let personReducer = function(person = {}, action) {
    switch(action.type) {
        case 'GET_PERSON':
            return action.person;
        default:
            return person;
    }
}

export default personReducer