let apiBaseURI = 'http://localhost:5057';

if(process.env.NODE_ENV === 'production') {
    apiBaseURI = 'https://cv-api.donola.net';
}

let initialState = {
    person: {},
    projects: [],
    settings: {
        apiBaseURI: apiBaseURI
    },
    skills: [],
    studies: [],
    trainings: [],
    experiences: [],
    images: []
};

export default initialState;