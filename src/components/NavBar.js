import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/users'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends React.Component {
    handleLogOut = () => {
        if(this.props.user) {
            localStorage.removeItem('token')
            this.props.logoutUser()
        }
    }

    render() {
        return <Navbar bg="light">
            <Navbar.Brand>Flatnote</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to='/dashboard' className='nav-link'>
                        Dashboard
                    </NavLink>
                    <NavLink to='/note/new' className='nav-link'>
                        New Note
                    </NavLink>
                </Nav>
                    {this.props.user ? null : <NavLink to='/register' className='nav-link'>Register</NavLink>}
                <NavLink to='/login' className='nav-link' onClick={this.handleLogOut}>
                    {this.props.user ? 'Logout' : 'Login'}
                </NavLink>
        </Navbar>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)