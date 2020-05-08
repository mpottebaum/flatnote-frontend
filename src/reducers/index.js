import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import notesReducer from './notesReducer'
import showNoteReducer from './showNoteReducer'
import authReducer from './authReducer'
import selectedTagIdsReducer from './selectedTagIdsReducer'

const rootReducer = combineReducers({
    user: usersReducer,
    notes: notesReducer,
    showNoteId: showNoteReducer,
    auth: authReducer,
    selectedTagIds: selectedTagIdsReducer
})


export default rootReducer