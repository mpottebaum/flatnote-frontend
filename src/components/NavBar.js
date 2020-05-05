import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
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
                                <NavLink to='/login' className='nav-link'>
                                    Sign In
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
    }
}

export default NavBar