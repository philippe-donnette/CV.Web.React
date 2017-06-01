import projectActions from './project-actions';
import skillActions from './skill-actions';
import studyActions from './study-actions';
import settingsActions from './settings-actions';
import personActions from './person-actions';

let actions = Object.assign({}, projectActions, skillActions, studyActions, settingsActions, personActions);

export default actions