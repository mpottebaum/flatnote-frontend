import React from 'react'

const ShowNote = props => {
    return <div>
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
            <button onClick={props.toggleEditing}>Edit</button>
        </div>
}

export default ShowNote