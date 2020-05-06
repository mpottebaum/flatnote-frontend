import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

const Note = props => {
    const { id, title, content} = props.note
    return <ListGroup.Item onClick={e => props.handleNoteClick(id)}>
        <Card>
            <Card.Header>
                {title}
            </Card.Header>
            <Card.Body>
            {content}
            </Card.Body>
        </Card>
    </ListGroup.Item>
}

export default Note