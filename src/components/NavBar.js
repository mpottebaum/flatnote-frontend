import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return <div>
            <NavLink to='/dashboard'>
                Dashboard
            </NavLink>
            <NavLink to='/note/new'>
                New Note
            </NavLink>
            <NavLink to='/login'>
                Sign In
            </NavLink>
        </div>
    }
}

export default NavBar