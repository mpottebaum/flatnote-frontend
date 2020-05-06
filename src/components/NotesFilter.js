import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class NotesFilter extends React.Component {
    render() {
        return <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    }
}

export default NotesFilter