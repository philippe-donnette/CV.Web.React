import { combineReducers } from 'redux'
import skillsReducer from './skill-reducer'
import projectsReducer from './project-reducer'
import settingsReducer from './setting-reducer';

const rootReducer = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
    settings: settingsReducer
})

export default rootReducer