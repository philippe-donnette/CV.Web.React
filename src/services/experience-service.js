class ExperienceService {
    constructor(baseURI) {
        this.baseURI = baseURI;
    }

    getExperiences() {
        let request = new Request(`${this.baseURI}/api/experience/all`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }
}

export default ExperienceService;