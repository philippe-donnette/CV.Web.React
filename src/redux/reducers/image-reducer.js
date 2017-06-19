let imagesReducer = function(images = [], action) {
    switch(action.type) {
        case 'GET_PROJECT_IMAGES':
            return action.images;
        default:
            return images;
    }
}

export default imagesReducer