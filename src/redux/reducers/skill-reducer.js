let skillsReducer = function(skills = [], action) {
    switch(action.type) {
        case 'GET_SKILLS':
            return action.skills;
        case 'GET_PROJECT_SKILLS':
            return action.skills;
        default:
            return skills;
    }
}

export default skillsReducer