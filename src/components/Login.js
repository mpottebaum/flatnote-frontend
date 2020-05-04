import React from 'react'
import { users } from '../urlPaths'

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
                console.log(user)
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

export default Login