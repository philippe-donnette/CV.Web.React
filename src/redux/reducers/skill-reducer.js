let skillsReducer = function(skills = [], action) {
    switch(action.type) {
        case 'GET_SKILLS':
            return action.projects;
        default:
            return skills;
    }
}

export default skillsReducer