import React from 'react';
import Inicio from './views/Inicio';
import Sesion from './views/Sesion';
import Menu from './views/Menu';
import Proveedor from './views/Proveedor';
import Producto from './views/Producto';
import ModuloInventario from './views/ModuloInventario';

import { BrowserRouter as Router, Switch, Route} from
'react-router-dom';

import './App.css';
import 'jquery/dist/jquery.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/index.js";

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
        <Route path="/menu">
        <Menu/>
        </Route>
        <Route exact path="/registroproveedor">
          <Proveedor/>
        </Route>
        <Route exact path="/registroproducto">
          <Producto />
        </Route>
        <Route path="/moduloinventario">
        <ModuloInventario />
        </Route>

    </Router>

  );
}

export default App;
