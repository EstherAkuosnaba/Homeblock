import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Signup from './Pages/Singup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Common/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/new" component={Signup} />
        </Switch>
            </div>
    </Router>
  );
}

export default App;
