import ProjectService from '../../services/project-service';
import actions from './index';

let imageActions = {
    loadProjectImages: function (images) {
        return {
            type: 'GET_PROJECT_IMAGES',
            images: images
        }
    },
    fetchProjectImages: function (config, projectId) {
        return (dispatch) => {
            let projectService = new ProjectService(config.apiBaseURI);
            projectService.getImages(projectId)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadProjectImages(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getProjectImages: function (projectId) {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchProjectImages(config, projectId));
        };
    }
}

export default imageActions