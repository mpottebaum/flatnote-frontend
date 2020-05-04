export const addNotes = notes => {
    return {
        type: 'ADD_NOTES',
        notes: notes
    }
}

export const selectNote = note => {
    return {
        type: 'SELECT_NOTE',
        showNote: note
    }
}