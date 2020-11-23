import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Signup from './Pages/Singup';
import Login from './Pages/Login';
import Navbar from './Common/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Navbar} />
          <Route path="/login" exact component={Login} />
          <Route path="/new" component={Signup} />
        </Switch>
            </div>
    </Router>
  );
}

export default App;
