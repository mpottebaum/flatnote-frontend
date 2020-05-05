import React from 'react'
import { users } from '../urlPaths'

class EditNote extends React.Component {
    constructor(props) {
        super()

        this.state = {
            title: props.note.title,
            content: props.note.content
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
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
        return <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' name='title' value={this.state.title} />
            <input onChange={this.handleChange} type='text-area' name='content' value={this.state.content} />
            <input type='submit' value='Save' />
        </form>
    }
}

export default EditNote