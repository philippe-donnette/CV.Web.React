import { combineReducers } from 'redux'
import skillsReducer from './skill-reducer'
import projectsReducer from './project-reducer'
import settingsReducer from './settings-reducer';
import personReducer from './person-reducer';

const rootReducer = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
    settings: settingsReducer,
    person: personReducer
})

export default rootReducer