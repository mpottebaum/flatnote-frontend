import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ShowNote = props => {
    const tagNames = props.note.tags.map(tag => tag.name).join(', ')
    const convertDate = date => {
        const dateObj = new Date(date)
        return dateObj.toDateString()
    }
    return <Card>
        <Card.Body>
            <Card.Title>{props.note.title}</Card.Title>
            <Card.Text>{props.note.content}</Card.Text>
            <Card.Text>Tags: {tagNames}</Card.Text>
            <Card.Text className='mb-2 text-muted'>Created: {convertDate(props.note.created_at)}</Card.Text>
            <Card.Text className='mb-2 text-muted'>Last updated: {convertDate(props.note.updated_at)}</Card.Text>
            <Button onClick={() => props.handleDeleteNote(props.note.id)}>Delete</Button>
            <Button onClick={props.toggleEditing}>Edit</Button>
        </Card.Body>
        </Card>
}

export default ShowNote