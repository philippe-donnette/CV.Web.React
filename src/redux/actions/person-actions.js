import PersonService from '../../services/person-service';
import actions from './index';

let personActions = {
    loadPerson: function (person) {
        return {
            type: 'GET_PERSON',
            person: person
        }
    },
    fetchPerson: function (config) {
        return (dispatch) => {
            let personService = new PersonService(config.apiBaseURI);
            personService.getPerson()
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadPerson(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getPerson: function () {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchPerson(config));
        };
    }
}

export default personActions