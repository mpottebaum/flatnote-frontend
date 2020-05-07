import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import DashboardContainer from './containers/DashboardContainer'
import NewNote from './components/NewNote'
import NavigationBar from './components/NavBar'
import { connect } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
        <Router>
          <NavigationBar />
          <div className='container'>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/dashboard' component={DashboardContainer} />
              <Route path='/note/new' component={NewNote} />
              <Route path='/note/:id' component={DashboardContainer} />
            </Switch>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    currentUser: user => dispatch({type: 'CURRENT_USER', user: user})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
