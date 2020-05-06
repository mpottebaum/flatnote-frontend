import React from 'react'
import Button from 'react-bootstrap/Button'

const ShowNote = props => {
    const tagNames = props.note.tags.map(tag => tag.name).join(', ')
    return <div>
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
            <p>Tags: {tagNames}</p>
            <Button onClick={() => props.handleDeleteNote(props.note.id)}>Delete</Button>
            <Button onClick={props.toggleEditing}>Edit</Button>
        </div>
}

export default ShowNote