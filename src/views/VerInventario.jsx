import React from 'react'
import Contenido from '../component/Contenido';
import NavBar from '../component/NavBar';
import Inventario from '../listas/Inventario';

const links = [
    {href:'inicio', title: 'Inicio'},
    {href: 'cerrarsesion', title: 'Cerrar Sesion'}


]


function VerInventario (){
        return (
        <>
        <NavBar links={links}/>
        <h2 className="Titulo"> Inventario </h2>
        <nav className="navbar navbar-light container">
         <form className="form-inline" action="/action_page.php">
          <div className="row">
           <input className="form-control mr-sm-2" type="text" placeholder="Search" />
           <input className="btn btn-success" type="submit" value="Buscar"></input>
          </div>
         </form>
        </nav>
        <div className="container">
        <Contenido >
            <Inventario/>
        </Contenido>
        <br />
        <nav aria-label="Page navigation example">
         <ul className="pagination justify-content-end">
          <li className="page-item disabled">
           <a className="page-link" href="#" tabindex="1">Anterior</a>
          </li>
          <li className="page-item active">
           <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item">
           <a className="page-link" href="#"> 2</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
           <a className="page-link" href="#">Proximo</a>
          </li>
         </ul>
        </nav>
        </div>
        </>
    );
}

export default VerInventario;
