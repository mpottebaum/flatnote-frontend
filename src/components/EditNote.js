import React from 'react'
import { users } from '../urlPaths'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class EditNote extends React.Component {
    constructor(props) {
        super()

        const tagNames = props.note.tags.map(tag => tag.name)

        this.state = {
            title: props.note.title,
            content: props.note.content,
            tagNames: tagNames.join(', ')
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({note: this.state})
        }
        const url = users + `/${this.props.user.id}/notes/${this.props.note.id}`
        fetch(url, configObj)
            .then(resp => resp.json())
            .then(notes => {
                this.props.addNotes(notes)
                this.props.toggleEditing()
            })
    }

    render() {
        return <Card>
            <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='formBasicText'>
                        <Form.Control onChange={this.handleChange} type='text' name='title' value={this.state.title} />
                    </Form.Group>
                    <Form.Group controlId='formBasicTextArea'>
                        <Form.Control as='textarea' row='4' onChange={this.handleChange} type='text' name='content' value={this.state.content} />
                    </Form.Group>
                    <Form.Group controlId='formBasicText'>
                        <Form.Label>Tags</Form.Label>
                        <Form.Control onChange={this.handleChange} type='text' name='tagNames' value={this.state.tagNames} />
                        <Form.Text>Separate tags with a comma</Form.Text>
                    </Form.Group>
                    <Button type='submit'>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    }
}

export default EditNote