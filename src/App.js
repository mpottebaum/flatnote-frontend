import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import DashboardContainer from './containers/DashboardContainer'
import NewNote from './components/NewNote'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={DashboardContainer} />
          <Route path='/note/new' component={NewNote} />
          <Route path='/note/:id' component={DashboardContainer} />
        </Switch>
      </Router>
  );
}

export default App;
