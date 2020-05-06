import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

class NotesSort extends React.Component {
    render() {
        return <ToggleButtonGroup onChange={this.props.handleSort} type='radio' name='sort' defaultValue={'created'}>
        <ToggleButton value={'created'}>Recently Created</ToggleButton>
        <ToggleButton value={'updated'}>Recently Updated</ToggleButton>
        <ToggleButton value={'title'}>Title</ToggleButton>
      </ToggleButtonGroup>
    }
}

export default NotesSort