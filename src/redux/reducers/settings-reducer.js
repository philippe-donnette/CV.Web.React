let settingsReducer = function(settings = {}, action) {
    switch(action.type) {
        case 'GET_SETTINGS':
            return settings;
        default:
            return settings;
    }
}

export default settingsReducer