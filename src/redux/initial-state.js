let apiBaseURI = 'http://localhost:5057';

if(process.env.NODE_ENV === 'production') {
    apiBaseURI = 'http://cv-api.donola.net';
}

let initialState = {
    projects: [],
    settings: {
        apiBaseURI: 'http://localhost:5057'
    }
};

export default initialState;