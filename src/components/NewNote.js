import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'

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
        if(!this.props.user) {
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
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input onChange={this.handleChange} type='text' name='title' value={this.state.title} />
            <label htmlFor='content'>Notes</label>
            <input onChange={this.handleChange} type='text-area' name='content' value={this.state.content} />
            <label htmlFor='tagNames'>Tags</label>
            <input onChange={this.handleChange} type='text' name='tagNames' value={this.state.tagNames} />
            <input type='submit' value='Save' />
        </form>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(NewNote)