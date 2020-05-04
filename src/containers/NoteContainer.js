import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ShowNote from '../components/ShowNote'
import DashboardContainer from './DashboardContainer'

class NoteContainer extends React.Component {
    

    render() {
        return <React.Fragment>
            <DashboardContainer />
            <ShowNote note={} />
        </React.Fragment>
    }
}

export default NoteContainer