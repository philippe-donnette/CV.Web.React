import projectActions from './project-actions';
import skillActions from './skill-actions';
import studyActions from './study-actions';
import trainingActions from './training-actions';
import settingsActions from './settings-actions';
import personActions from './person-actions';

let actions = Object.assign({}, projectActions, skillActions, studyActions, trainingActions, settingsActions, personActions);

export default actions