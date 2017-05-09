import projectActions from './project-actions';
import settingsActions from './settings-actions';

let actions = Object.assign({}, projectActions, settingsActions);

export default actions