import React from 'react'

const Note = props => {
    const { title, content} = props.note
    return <li>
        <p>{title}</p>
        <p>{content}</p>
    </li>
}

export default Note