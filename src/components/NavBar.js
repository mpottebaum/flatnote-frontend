import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/users'

class NavBar extends React.Component {
    handleLogOut = () => {
        if(this.props.user) {
            this.props.logoutUser()
        }
    }

    render() {
        return <div className='row'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <ul className='navbar-nav mr-auto list-group list-group-horizontal'>
                        <div className='col-5'>
                            <li className='nav-item'>
                                <NavLink to='/dashboard' className='nav-link'>
                                    Dashboard
                                </NavLink>
                            </li>
                        </div>
                        <div className='col-5'>
                            <li className='nav-item'>
                                <NavLink to='/note/new' className='nav-link'>
                                    New Note
                                </NavLink>
                            </li>
                        </div>
                        <div className='col-5'>
                            <li className='nav-item'>
                                <NavLink to='/login' className='nav-link' onClick={this.handleLogOut}>
                                    {this.props.user ? 'Sign Out' : 'Sign In'}
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)