import React from 'react'
import Note from './Note'
import '../NotesList.css'
import ListGroup from 'react-bootstrap/ListGroup'

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

    return <ListGroup className='notes-list'>
        {renderNotes()}
    </ListGroup>
}

export default NotesList