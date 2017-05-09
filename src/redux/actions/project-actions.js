import ProjectService from '../../services/project-service';
import actions from './index';

let projectActions = {
    loadProjects: function (projects) {
        return {
            type: 'GET_PROJECTS',
            projects: projects
        }
    },
    fetchProjects: function (config) {
        return (dispatch) => {
            let projectService = new ProjectService(config.apiBaseURI);
            projectService.getProjects()
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadProjects(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getProjects: function () {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchProjects(config));
        };
    }
}

export default projectActions