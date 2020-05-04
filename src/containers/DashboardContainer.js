import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'

class DashboardContainer extends React.Component {

    componentDidMount() {
        const url = users + `/${this.props.user.id}/notes`
        fetch(url)
            .then(resp => resp.json())
            .then(notes => {
                console.log(notes)
            })
    }

    render() {
        return <React.Fragment>

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
        addUsers: users => dispatch({type: 'ADD_USERS', users: users})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)