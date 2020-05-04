import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import notesReducer from './notesReducer'
import showNoteReducer from './showNoteReducer'

const rootReducer = combineReducers({
    user: usersReducer,
    notes: notesReducer,
    showNote: showNoteReducer
})


export default rootReducer