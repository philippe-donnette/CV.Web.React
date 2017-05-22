import projectActions from './project-actions';
import skillActions from './skill-actions';
import settingsActions from './settings-actions';
import personActions from './person-actions';

let actions = Object.assign({}, projectActions, skillActions, settingsActions, personActions);

export default actions