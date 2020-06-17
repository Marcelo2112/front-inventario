import React from 'react';
import Inicio from './views/Inicio';
import Sesion from './views/Sesion';
import Menu from './views/Menu';
import Proveedor from './views/Proveedor';
import ModuloProveedor from './views/ModuloProveedor';
import Producto from './views/Producto';
import ModuloInventario from './views/ModuloInventario';
import VerProveedor from './views/VerProveedpr';
import VerInventario from './views/VerInventario';
import RegistroProveedor from './formulario/RegistroProveedor';
import Insumo from './views/Insumo';
import ModuloInsumo from './views/ModuloInsumo';
import VerInsumo from './views/VerInsumo';


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
      <Route path="/sesion" component={Sesion} />
        <Route path="/menu">
        <Menu/>
        </Route>

        <Route exact path="/moduloproveedor">
          <ModuloProveedor/>
        </Route>
        <Route exact path="/verproveedor">
          <VerProveedor/>
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
        <Route exact path="/verinventario">
          <VerInventario />
        </Route>

        {/*Insumo*/}
        <Route exact path="/moduloinsumo">
          <ModuloInsumo/>
        </Route>
        <Route exact path="/verinsumo">
          <VerInsumo/>
        </Route>
        <Route exact path="/registroinsumo">
          <Insumo/>
        </Route>

    </Router>

  );
}

export default App;
