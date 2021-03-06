import React from 'react'
import ShowNote from '../components/ShowNote'
import EditNote from '../components/EditNote'
import { users } from '../urlPaths'

class NoteContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            editing: false
        }
    }

    toggleEditing = () => {
        this.setState(prevState => {
            return {
                editing: !prevState.editing
            }
        })
    }

    handleDeleteNote = id => {
        const token = localStorage.getItem('token')
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const url = users + `/${this.props.user.id}/notes/${id}`
        fetch(url, configObj)
            .then(resp => resp.json())
            .then(notes => {
                this.props.addNotes(notes)
                this.props.history.push('/dashboard')
            })
    }

    render() {
        return <div className='note-container'>
            {
                this.state.editing ?
                <EditNote
                    note={this.props.note}
                    user={this.props.user}
                    addNotes={this.props.addNotes}
                    toggleEditing={this.toggleEditing}
                />
                :
                <ShowNote
                    note={this.props.note}
                    toggleEditing={this.toggleEditing}
                    handleDeleteNote={this.handleDeleteNote}
                />
            }
        </div>
    }
}

export default NoteContainer