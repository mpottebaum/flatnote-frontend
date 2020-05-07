const loadingReducer = (state=true, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return false
        case 'CURRENT_USER':
            return false
        default:
            return state
    }
}

export default loadingReducer