import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'
import { addNotes } from '../actions/notes'
import NotesList from '../components/NotesList'

class DashboardContainer extends React.Component {

    componentDidMount() {
        const url = users + `/${this.props.user.id}/notes`
        fetch(url)
            .then(resp => resp.json())
            .then(notes => {
                this.props.addNotes(notes)
            })
    }

    render() {
        return <React.Fragment>
            <NotesList notes={this.props.notes} />
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNotes: notes => dispatch(addNotes(notes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)