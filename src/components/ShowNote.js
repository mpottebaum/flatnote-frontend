import React from 'react'

const ShowNote = props => {
    const tagNames = props.note.tags.map(tag => tag.name).join(', ')
    return <div>
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
            <p>Tags: {tagNames}</p>
            <button onClick={() => props.handleDeleteNote(props.note.id)}>Delete</button>
            <button onClick={props.toggleEditing}>Edit</button>
        </div>
}

export default ShowNote