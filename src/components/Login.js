import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../urlPaths'
import { loginUser } from '../actions/users'
import Form from 'react-bootstrap/Form'
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
                console.log(data)
                localStorage.setItem('token', data.jwt)
                this.props.loginUser(data.user)
                this.props.history.push('/dashboard')
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Group as={Row} controlId='formHorizontalText'>
                <Col sm={5}>
                    <Form.Control
                        onChange={this.handleChange}
                        type='text'
                        name='username'
                        value={this.state.username}
                        placeholder='Username'
                    />
                </Col>
                <Col sm={5}>
                    <Form.Control
                        onChange={this.handleChange}
                        type='password'
                        name='password'
                        value={this.state.password}
                    />
                </Col>
                <Col sm={1}>
                  <Form.Control type='submit' value='Login' />
                </Col>
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