import React from 'react'
import { Link } from 'react-router-dom'

const Note = props => {
    const { id, title, content} = props.note
    return <li onClick={e => props.handleNoteClick(id)}>
        <p>{title}</p>
        <p>{content}</p>
    </li>
}

export default Note