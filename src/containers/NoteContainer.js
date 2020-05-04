import React from 'react'
import ShowNote from '../components/ShowNote'
import EditNote from '../components/EditNote'

class NoteContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            editing: false
        }
    }

    toggleEditing = () => {
        this.setState(prevState => {
            return {
                editing: !prevState.editing
            }
        })
    }

    render() {
        return <React.Fragment>
            {
                this.state.editing ?
                <EditNote note={this.props.note} />
                :
                <ShowNote
                    note={this.props.note}
                    toggleEditing={this.toggleEditing}
                />
            }
        </React.Fragment>
    }
}

export default NoteContainer