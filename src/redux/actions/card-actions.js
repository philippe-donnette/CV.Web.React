import PersonService from '../../services/person-service';
import actions from './index';

let cardActions = {
    loadCards: function (cards) {
        return {
            type: 'GET_CARDS',
            cards: cards
        }
    },
    fetchCards: function (config) {
        return (dispatch) => {
            let personService = new PersonService(config.apiBaseURI);
            personService.getCards()
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadCards(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getCards: function () {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchCards(config));
        };
    }
}

export default cardActions