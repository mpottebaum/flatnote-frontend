export const addTag = id => {
    return {
        type: 'ADD_TAG',
        tagId: id
    }
}

export const removeTag = id => {
    return {
        type: 'REMOVE_TAG',
        tagId: id
    }
}