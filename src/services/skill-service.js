class SkillService {
    constructor(baseURI) {
        this.baseURI = baseURI;
    }

    getSkills() {
        let request = new Request(`${this.baseURI}/api/skill/all`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }
}

export default SkillService;