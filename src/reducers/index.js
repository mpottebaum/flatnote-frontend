import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import notesReducer from './notesReducer'

const rootReducer = combineReducers({
    user: usersReducer,
    notes: notesReducer
})


export default rootReducer