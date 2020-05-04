import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'
import { loginUser } from '../actions/users'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    handleChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        fetch(users, configObj)
            .then(resp => resp.json())
            .then(user => {
                this.props.loginUser(user)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} type='text' name='username' value={this.state.username} />
                <input type='submit' value='login' />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => {
            dispatch(loginUser(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)