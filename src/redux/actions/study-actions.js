import StudyService from '../../services/study-service';
import actions from './index';

let studyActions = {
    loadStudies: function (studies) {
        return {
            type: 'GET_STUDIES',
            studies: studies
        }
    },
    fetchStudies: function (config) {
        return (dispatch) => {
            let studyService = new StudyService(config.apiBaseURI);
            studyService.getStudies()
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadStudies(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getStudies: function () {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchStudies(config));
        };
    }
}

export default studyActions