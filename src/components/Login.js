import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../urlPaths'
import { loginUser } from '../actions/users'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
        fetch(auth, configObj)
            .then(resp => resp.json())
            .then(data => {
                if(data.error) {
                    alert(data.error)
                } else {
                    localStorage.setItem('token', data.jwt)
                    this.props.loginUser(data.user)
                    this.props.history.push('/dashboard')
                }
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className='user-form'>
                <Form.Group controlId='formBasicText'>
                    <Form.Label>
                        Username
                    </Form.Label>
                    <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        name='username'
                        value={this.state.username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                        onChange={this.handleChange}
                        type='password'
                        name='password'
                        value={this.state.password}
                    />
                </Form.Group>
                <Form.Group>
                  <Button type='submit'>Login</Button>
                </Form.Group>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => {
            return dispatch(loginUser(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)