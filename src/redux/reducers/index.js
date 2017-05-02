import { combineReducers } from 'redux'
import skillsReducer from './skillsReducer'
import projectsReducer from './projectsReducer'

const rootReducer = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer
})

export default rootReducer