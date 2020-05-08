import React from 'react'
import { connect } from 'react-redux'
import { users, auth } from '../urlPaths'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { currentUser } from '../actions/users'

class NewNote extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: '',
            tagNames: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token) {
            const configObj = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }
              }
              fetch(auth, configObj)
                .then(resp => resp.json())
                .then(data => {
                    if(data.error) {
                        alert(data.error)
                        this.props.history.push('/login')
                    } else {
                        this.props.currentUser(data.user)
                    }
                })
        } else if(!this.props.auth) {
            this.props.history.push('/login')
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        const token = localStorage.getItem('token')
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({note: this.state})
        }
        const url = users + `/${this.props.user.id}/notes`
        fetch(url, configObj)
            .then(resp => resp.json())
            .then(note => {
                this.props.history.push(`/note/${note.id}`)
            })
    }

    render() {
        return <Form onSubmit={this.handleSubmit} className='new-note'>
            <Form.Group controlId='formBasicText'>
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={this.handleChange} type='text' name='title' value={this.state.title} />
            </Form.Group>
            <Form.Group controlId='formBasicTextArea'>
                <Form.Label>Notes</Form.Label>
                <Form.Control as='textarea' row='7' onChange={this.handleChange} type='text-area' name='content' value={this.state.content} />
            </Form.Group>
            <Form.Group controlId='formBasicText'>
                <Form.Label>Tags</Form.Label>
                <Form.Control onChange={this.handleChange} type='text' name='tagNames' value={this.state.tagNames} />
                <Form.Text>Separate tags with a comma</Form.Text>
            </Form.Group>
            <Button type='submit'>Save</Button>
        </Form>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        currentUser: user => dispatch(currentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)