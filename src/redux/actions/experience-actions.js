import ExperienceService from '../../services/experience-service';
import actions from './index';

let experienceActions = {
    loadExperiences: function (experiences) {
        return {
            type: 'GET_EXPERIENCES',
            experiences: experiences
        }
    },
    fetchExperiences: function (config) {
        return (dispatch) => {
            let experienceService = new ExperienceService(config.apiBaseURI);
            experienceService.getExperiences()
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadExperiences(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getExperiences: function () {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchExperiences(config));
        };
    }
}

export default experienceActions