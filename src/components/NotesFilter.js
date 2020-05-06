import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

class NotesFilter extends React.Component {
    constructor() {
        super()

        this.state = {
            tag: ''
        }
    }

    handleChange = e => {
        this.setState({
            tag: e.target.value
        })
    }

    matchingTags = () => {
        return this.props.tags.filter(tag => tag.name.includes(this.state.tag))
    }

    renderTags = () => {
        return this.matchingTags().map(tag => {
            return <ListGroup.Item onClick={() => this.props.handleClickFilterTag(tag)}>{tag.name}</ListGroup.Item>
        })
    }

    renderSelectedTags = () => {
        return this.props.selectedTags.map(tag => <Badge onClick={() => this.props.handleRemoveFilterTag(tag.id)} variant="info">{tag.name}</Badge>)
    }

    render() {
        return <Accordion>
            <Card>
                <Card.Body>
                    Selected Tags: {this.renderSelectedTags()}
                </Card.Body>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Search Tags
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                      <Form.Control onChange={this.handleChange} type='text' value={this.state.tag} placeholder='Select tags from the list below'/>
                        <ListGroup>
                            {this.renderTags()}
                        </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    }
}

export default NotesFilter