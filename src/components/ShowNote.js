import React from 'react'

const ShowNote = props => {
    return <div>
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
        </div>
}

export default ShowNote