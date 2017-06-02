class TrainingService {
    constructor(baseURI) {
        this.baseURI = baseURI;
    }

    getTrainings() {
        let request = new Request(`${this.baseURI}/api/training/all`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }
}

export default TrainingService;