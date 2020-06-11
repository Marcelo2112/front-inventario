import React from 'react';
import Inicio from './views/Inicio';
import Sesion from './views/Sesion';

import { BrowserRouter as Router, Switch, Route} from
'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Inicio/>
        </Route>
        <Route exact path="/inicio">
          <Inicio/>
        </Route>
      </Switch>
      <Route path="/sesion">
        <Sesion/>
        </Route>
    </Router>
   
  );
}

export default App;