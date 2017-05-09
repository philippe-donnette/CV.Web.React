let projectsReducer = function(projects = [], action) {
    switch(action.type) {
        case 'GET_PROJECTS':
            return action.projects;
        default:
            return projects;
    }
}

export default projectsReducer