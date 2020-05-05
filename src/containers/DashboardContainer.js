import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'
import { addNotes, selectNote } from '../actions/notes'
import NotesList from '../components/NotesList'
import NoteContainer from '../containers/NoteContainer'

class DashboardContainer extends React.Component {

    componentDidMount() {
        const url = users + `/${this.props.user.id}/notes`
        fetch(url)
            .then(resp => resp.json())
            .then(notes => {
                this.props.addNotes(notes)
                if(this.props.match.params.id) {
                    const id = parseInt(this.props.match.params.id)
                    // const note = notes.find(note => note.id === parseInt(id))
                    this.props.selectNote(id)
                }
            })
    }

    handleNoteClick = id => {
        // const note = this.props.notes.find(note => note.id === id)
        this.props.selectNote(id)
        this.props.history.push(`/note/${id}`)
    }

    findShowNote = id => {
        return this.props.notes.find(note => note.id === id)
    }

    render() {
        const showNote = this.findShowNote(this.props.showNoteId)
        return <React.Fragment>
            <NotesList notes={this.props.notes} handleNoteClick={this.handleNoteClick}/>
            {
                showNote ?
                <NoteContainer
                    note={showNote}
                    user={this.props.user}
                    addNotes={this.props.addNotes}
                    history={this.props.history}
                />
                :
                null
            }
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        user: state.user,
        showNoteId: state.showNoteId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNotes: notes => dispatch(addNotes(notes)),
        selectNote: id => dispatch(selectNote(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)