import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'
import { addNotes, selectNote } from '../actions/notes'
import NotesList from '../components/NotesList'
import NoteContainer from './NoteContainer'
import NotesFilter from '../components/NotesFilter'
import NotesSort from '../components/NotesSort'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DashboardContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            sort: 'created'
        }
    }


    componentDidMount() {
        if(this.props.user) {
            const url = users + `/${this.props.user.id}/notes`
            fetch(url)
                .then(resp => resp.json())
                .then(notes => {
                    this.props.addNotes(notes)
                    if(this.props.match.params.id) {
                        const id = parseInt(this.props.match.params.id)
                        this.props.selectNote(id)
                    }
                })
        } else {
            this.props.history.push('/login')
        }
    }

    componentDidUpdate() {
        this.clearShowNote()
    }
    
    clearShowNote = () => {
        if(this.props.match.path === '/dashboard') {
            this.props.selectNote(null)
        }
    }

    handleNoteClick = id => {
        this.props.selectNote(id)
        this.props.history.push(`/note/${id}`)
    }

    handleSort = value => {
        this.setState({
            sort: value
        })
    }

    sortNotes = () => {
        switch(this.state.sort) {
            case 'created':
                return this.props.notes.sort((a, b) => {
                    return (new Date(b.created_at)) - (new Date(a.created_at))
                })
            case 'updated':
                return this.props.notes.sort((a, b) => {
                    return (new Date(b.updated_at)) - (new Date(a.updated_at))
                })
            case 'title':
                return this.props.notes.sort((a, b) => {
                    const textA = a.title.toUpperCase();
                    const textB = b.title.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
            default:
                return this.props.notes
        }
    }

    findShowNote = id => {
        return this.props.notes.find(note => note.id === id)
    }

    render() {
        const showNote = this.findShowNote(this.props.showNoteId)
        const notes = this.sortNotes()

        return <Container>
            <Row>

                <Col sm={5}>
                    <NotesList notes={notes} handleNoteClick={this.handleNoteClick}/>
                </Col>
                <Col sm={3}>
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
                    <NotesFilter />
                    <NotesSort handleSort={this.handleSort} />
                </Col>
            </Row>
        </Container>
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