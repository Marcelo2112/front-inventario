import React from 'react'
import Contenido from '../component/Contenido';
import NavBar from '../component/NavBar';
import Inventario from '../listas/Inventario';
import Search from '../component/Search';
import Paginacion from '../component/Paginacion';


const links = [
    {href:'menu', title: 'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}


]


function VerInventario (){
        return (
        <>
        <NavBar links={links}/>
        <h2 className="Titulo"> Inventario </h2>
        <Search />
        <div className="container">
        <Contenido>
            <Inventario />
        </ Contenido>
        <br />
        <Paginacion />
        </div>
        </>
    );
}

export default VerInventario;
