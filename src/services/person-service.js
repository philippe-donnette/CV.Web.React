class PersonService {
    constructor(baseURI) {
        this.baseURI = baseURI;
    }

    getPerson() {
        let request = new Request(`${this.baseURI}/api/person`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }

    getCards() {
        let request = new Request(`${this.baseURI}/api/person/card/all`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }
}

export default PersonService;