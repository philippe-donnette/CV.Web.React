import TrainingService from '../../services/training-service';
import actions from './index';

let trainingActions = {
    loadTrainings: function (trainings) {
        return {
            type: 'GET_TRAININGS',
            trainings: trainings
        }
    },
    fetchTrainings: function (config) {
        return (dispatch) => {
            let trainingService = new TrainingService(config.apiBaseURI);
            trainingService.getTrainings()
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadTrainings(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getTrainings: function () {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchTrainings(config));
        };
    }
}

export default trainingActions