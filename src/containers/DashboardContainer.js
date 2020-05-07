import React from 'react'
import { connect } from 'react-redux'
import { users, auth } from '../urlPaths'
import { addNotes, selectNote } from '../actions/notes'
import NotesList from '../components/NotesList'
import NoteContainer from './NoteContainer'
import NotesFilter from '../components/NotesFilter'
import NotesSort from '../components/NotesSort'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Dashboard.css'

class DashboardContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            sort: 'created',
            selectedTags: []
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('token')
        if(this.props.auth) {
            const url = users + `/${this.props.user.id}/notes`
            const configObj = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            fetch(url, configObj)
                .then(resp => resp.json())
                .then(notes => {
                    this.props.addNotes(notes)
                    if(this.props.match.params.id) {
                        const id = parseInt(this.props.match.params.id)
                        this.props.selectNote(id)
                    }
                })
        } else if(token) {
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
                console.log(data)
                this.props.currentUser(data.user)
                this.props.addNotes(data.notes)
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

    sortNotes = notes => {
        switch(this.state.sort) {
            case 'created':
                return notes.sort((a, b) => {
                    return (new Date(b.created_at)) - (new Date(a.created_at))
                })
            case 'updated':
                return notes.sort((a, b) => {
                    return (new Date(b.updated_at)) - (new Date(a.updated_at))
                })
            case 'title':
                return notes.sort((a, b) => {
                    const textA = a.title.toUpperCase();
                    const textB = b.title.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
            default:
                return notes
        }
    }

    getTags = notes => {
        const allTags = notes.map(note => note.tags).flat()
        const lib = {}
        return allTags.filter(tag => {
            if(lib[tag.id]) {
                return false
            } else {
                lib[tag.id] = tag.id
                return true
            }
        })
    }

    filterNotes = () => {
        return this.props.notes.filter(note => {
            return this.state.selectedTags.every(tag => note.tags.includes(tag))
        })
    }

    handleClickFilterTag = tag => {
        this.setState(prevState => {
            if(prevState.selectedTags.includes(tag)) {
                return {}
            } else {
                return {
                    selectedTags: [...prevState.selectedTags, tag]
                }
            }
        })
    }

    handleRemoveFilterTag = id => {
        this.setState(prevState => {
            const updatedTags = prevState.selectedTags.filter(tag => {
                return tag.id !== id
            })
            return {
                selectedTags: updatedTags
            }
        })
    }

    findShowNote = id => {
        return this.props.notes.find(note => note.id === id)
    }

    render() {
        const showNote = this.findShowNote(this.props.showNoteId)
        const notes = this.filterNotes()
        const tags = this.getTags(notes)
        const sortedNotes = this.sortNotes(notes)

        return <Container>
            <Row className='dashboard'>
                <Col sm={5}>
                    <NotesList notes={sortedNotes} handleNoteClick={this.handleNoteClick}/>
                    <NotesSort handleSort={this.handleSort} />
                </Col>
                <Col sm={5}>
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
                    <NotesFilter
                        tags={tags}
                        selectedTags={this.state.selectedTags}
                        handleClickFilterTag={this.handleClickFilterTag}
                        handleRemoveFilterTag={this.handleRemoveFilterTag}
                    />
                </Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        user: state.user,
        showNoteId: state.showNoteId,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNotes: notes => dispatch(addNotes(notes)),
        selectNote: id => dispatch(selectNote(id)),
        currentUser: user => dispatch({type: 'CURRENT_USER', user: user})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)