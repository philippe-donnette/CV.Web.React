let cardReducer = function(cards = [], action) {
    switch(action.type) {
        case 'GET_CARDS':
            return action.cards;
        default:
            return cards;
    }
}

export default cardReducer