import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import notesReducer from './notesReducer'
import showNoteReducer from './showNoteReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    user: usersReducer,
    notes: notesReducer,
    showNoteId: showNoteReducer,
    auth: authReducer,
})


export default rootReducer