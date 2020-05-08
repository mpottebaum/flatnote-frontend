const selectedTagIdsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TAG':
            return [...state, action.tagId]
        case 'REMOVE_TAG':
            const updatedTagIds = state.filter(tagId => {
                return tagId !== action.tagId
            })
            return updatedTagIds
        default:
            return state
    }
}

export default selectedTagIdsReducer