import React from 'react'
import { connect } from 'react-redux'

class DashboardContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch()
    }

    render() {
        return <React.Fragment>

        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUsers: users => dispatch({type: 'ADD_USERS', users: users})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)