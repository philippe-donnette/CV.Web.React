import { combineReducers } from 'redux';
import skillsReducer from './skill-reducer';
import studiesReducer from './study-reducer';
import trainingsReducer from './training-reducer';
import projectsReducer from './project-reducer';
import experiencesReducer from './experience-reducer';
import settingsReducer from './settings-reducer';
import personReducer from './person-reducer';

const rootReducer = combineReducers({
    skills: skillsReducer,
    studies: studiesReducer,
    trainings: trainingsReducer,
    projects: projectsReducer,
    experiences: experiencesReducer,
    settings: settingsReducer,
    person: personReducer
})

export default rootReducer