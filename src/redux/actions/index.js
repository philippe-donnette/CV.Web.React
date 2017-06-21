import projectActions from './project-actions';
import experienceActions from './experience-actions';
import skillActions from './skill-actions';
import imageActions from './image-actions';
import studyActions from './study-actions';
import trainingActions from './training-actions';
import settingsActions from './settings-actions';
import personActions from './person-actions';
import cardActions from './card-actions';

let actions = Object.assign({}, projectActions, experienceActions, skillActions, imageActions, studyActions, trainingActions, settingsActions, personActions, cardActions);

export default actions