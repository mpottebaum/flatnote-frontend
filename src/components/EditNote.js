import React from 'react'

class EditNote extends React.Component {
    constructor(props) {
        super()

        this.state = {
            title: props.note.title,
            content: props.note.content
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <form>
            <input onChange={this.handleChange} type='text' name='title' value={this.state.title} />
            <input onChange={this.handleChange} type='text-area' name='content' value={this.state.content} />
            <input type='submit' value='Save' />
        </form>
    }
}

export default EditNote