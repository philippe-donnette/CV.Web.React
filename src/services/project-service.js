class ProjectService {
    constructor(baseURI) {
        this.baseURI = baseURI;
    }

    getProjects() {
        let request = new Request(`${this.baseURI}/api/project/all`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }

    getSkills(id) {
        let request = new Request(`${this.baseURI}/api/project/${id}/skills`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }

    getImages(id) {
        let request = new Request(`${this.baseURI}/api/project/${id}/images`, {
            mode: 'CORS',
            method: 'GET'
        });
        return fetch(request);
    }
}

export default ProjectService;