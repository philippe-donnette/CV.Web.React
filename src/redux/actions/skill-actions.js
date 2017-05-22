import SkillService from '../../services/skill-service';
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
    }
}

export default skillActions