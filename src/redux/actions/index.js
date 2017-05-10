import projectActions from './project-actions';
import settingsActions from './settings-actions';
import personActions from './person-actions';

let actions = Object.assign({}, projectActions, settingsActions, personActions);

export default actions