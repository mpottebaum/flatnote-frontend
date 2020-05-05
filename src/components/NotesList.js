import React from 'react'
import Note from './Note'
import '../NotesList.css'

const NotesList = props => {
    const renderNotes = () => {
        return props.notes.map(note => {
            return <Note
                    key={note.id}
                    note={note}
                    handleNoteClick={props.handleNoteClick}
                    />
        })
    }

    return <ul className='notes-list'>
        {renderNotes()}
    </ul>
}

export default NotesList