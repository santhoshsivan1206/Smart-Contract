import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Distributor from './pages/Distributor/Distributor';
import User from './pages/User/User';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/user' exact>
          <User/>
        </Route>
        <Route path='/distributor' exact>
          <Distributor/>
        </Route>
        <Route path='/admin' exact>
          <Admin/>
        </Route>
        <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
