import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from '../Landing';
import Login from '../Login';
import Home from '../Home';
import PrivateRoute from '../../components/PrivateRoute';
import NoMatch from '../../components/NoMatch';
import './App.scss';

const App = () => (
  <Router>
    <div>
      <Switch>
        {/* children elements as recommended method in react router v5 */}
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
  // <div className="App">
  //   <header className="App-header">
  //     <Button type="primary">Button</Button>
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
);

export default App;
