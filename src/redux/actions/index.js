import projectActions from './project-actions';
import experienceActions from './experience-actions';
import skillActions from './skill-actions';
import studyActions from './study-actions';
import trainingActions from './training-actions';
import settingsActions from './settings-actions';
import personActions from './person-actions';

let actions = Object.assign({}, projectActions, experienceActions, skillActions, studyActions, trainingActions, settingsActions, personActions);

export default actions