import React from 'react'
import { connect } from 'react-redux'
import { users } from '../urlPaths'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { currentUser } from '../actions/users'

class RegisterUser extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.password !== this.state.confirmPassword) {
            alert('Password fields must match')
        } else {
            const configObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user: this.state})
            }
            fetch(users, configObj)
                .then(resp => resp.json())
                .then(data => {
                    if(data.error) {
                        alert(data.error)
                    } else {
                        localStorage.setItem('token', data.jwt)
                        this.props.currentUser(data.user)
                        this.props.history.push('/dashboard')
                    }
                })
        }
    }

    render() {
        return <Form onSubmit={this.handleSubmit} className='user-form'>
            <Form.Group controlId='formBasicText'>
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={this.handleChange} type='text' name='username' value={this.state.username} />
            </Form.Group>
                {this.state.password === this.state.confirmPassword ? null : <Form.Text>Password fields must match</Form.Text>}
            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange} type='password' name='password' value={this.state.password} />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onChange={this.handleChange} type='password' name='confirmPassword' value={this.state.confirmPassword} />
            </Form.Group>
            <Button type='submit'>Register</Button>
        </Form>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        currentUser: user => dispatch(currentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(RegisterUser)