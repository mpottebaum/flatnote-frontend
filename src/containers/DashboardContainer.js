import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'
import { addNotes } from '../actions/notes'
import NotesList from '../components/NotesList'
import ShowNote from '../components/ShowNote'
import notesReducer from '../reducers/notesReducer'

class DashboardContainer extends React.Component {

    componentDidMount() {
        const url = users + `/${this.props.user.id}/notes`
        fetch(url)
            .then(resp => resp.json())
            .then(notes => {
                this.props.addNotes(notes)
            })
    }

    handleNoteClick = id => {
        const note = this.props.notes.find(note => note.id === id)
        this.props.selectNote(note)
        this.props.history.push(`/note/${note.id}`)
    }

    render() {
        return <React.Fragment>
            <NotesList notes={this.props.notes} handleNoteClick={this.handleNoteClick}/>
            {this.props.showNote ? <ShowNote note={this.props.showNote} /> : null}
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        user: state.user,
        showNote: state.showNote
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNotes: notes => dispatch(addNotes(notes)),
        selectNote: note => dispatch({type: 'SELECT_NOTE', showNote: note})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)