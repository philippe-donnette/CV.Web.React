import SkillService from '../../services/skill-service';
import ProjectService from '../../services/project-service';
import actions from './index';

let skillActions = {
    loadSkills: function (skills) {
        return {
            type: 'GET_SKILLS',
            skills: skills
        }
    },
    fetchSkills: function (config) {
        return (dispatch) => {
            let skillService = new SkillService(config.apiBaseURI);
            skillService.getSkills()
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadSkills(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getSkills: function () {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchSkills(config));
        };
    },
    loadProjectSkills: function (skills) {
        return {
            type: 'GET_PROJECT_SKILLS',
            skills: skills
        }
    },
    fetchProjectSkills: function (config, projectId) {
        return (dispatch) => {
            let projectService = new ProjectService(config.apiBaseURI);
            projectService.getSkills(projectId)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(actions.loadProjectSkills(data));
                })
                .catch((error) => { throw (error); });
        };
    },
    getProjectSkills: function (projectId) {
        return (dispatch, getState) => {
            let config = getState().settings;
            dispatch(actions.fetchProjectSkills(config, projectId));
        };
    }
}

export default skillActions