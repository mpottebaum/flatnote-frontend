const usersReducer = (
    state = {
        username: undefined
    },
    action
) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {
                username: action.username
            }
        default:
            return state
    }
}

export default usersReducer