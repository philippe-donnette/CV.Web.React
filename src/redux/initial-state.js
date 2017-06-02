let apiBaseURI = 'http://localhost:5057';

if(process.env.NODE_ENV === 'production') {
    apiBaseURI = 'http://cv-api.donola.net';
}

let initialState = {
    person: {},
    projects: [],
    settings: {
        apiBaseURI: apiBaseURI
    },
    skills: [],
    studies: [],
    trainings: []
};

export default initialState;