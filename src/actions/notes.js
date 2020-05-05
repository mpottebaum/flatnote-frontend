export const addNotes = notes => {
    return {
        type: 'ADD_NOTES',
        notes: notes
    }
}

export const selectNote = noteId => {
    return {
        type: 'SELECT_NOTE',
        showNoteId: noteId
    }
}