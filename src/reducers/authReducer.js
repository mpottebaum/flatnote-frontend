const authReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return true
        case 'LOGOUT_USER':
            return false
        case 'CURRENT_USER':
            return true
        default:
            return state
    }
}

export default authReducer