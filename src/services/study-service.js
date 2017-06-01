class StudyService {
    constructor(baseURI) {
        this.baseURI = baseURI;
    }

    getStudies() {
        let request = new Request(`${this.baseURI}/api/qualification/all`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }
}

export default StudyService;