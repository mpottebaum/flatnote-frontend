import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import DashboardContainer from './containers/DashboardContainer'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
      <Router>
        <NavBar />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={DashboardContainer} />
      </Router>
  );
}

export default App;
