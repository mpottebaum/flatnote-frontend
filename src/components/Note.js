import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Note = props => {
    const { id, title, content} = props.note
    return <ListGroup.Item onClick={e => props.handleNoteClick(id)}>
        <p>{title}</p>
        <p>{content}</p>
    </ListGroup.Item>
}

export default Note