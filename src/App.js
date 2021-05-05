import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Work from './components/pages/Work';


function App() {
  return (
  <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component=
          {Home}  />
          <Route path='/work' exact component=
          {Work}  />
        </Switch>
      </Router>
  </>
  );
}

export default App;
