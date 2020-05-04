const showNoteReducer = (state=null, action) => {
    switch(action.type) {
        case 'SELECT_NOTE':
            return action.showNote
        default:
            return state
    }
}

export default showNoteReducer