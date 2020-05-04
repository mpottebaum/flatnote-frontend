import React from 'react'
import Note from './Note'

const NotesList = props => {
    const renderNotes = () => {
        return props.notes.map(note => {
            return <Note note={note} />
        })
    }

    return <ul>
        {renderNotes()}
    </ul>
}

export default NotesList