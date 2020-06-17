import React from 'react'
import Contenido from '../component/Contenido';
import NavBar from '../component/NavBar';
import Insumo from '../listas/Insumo';
import Search from '../component/Search';
import Paginacion from '../component/Paginacion';

const links = [
    {href:'inicio', title: 'Inicio'},
    {href: 'cerrarsesion', title: 'Cerrar Sesion'}


]


function VerInsumo (){
    return (
        <>
        <NavBar links={links}/>
        <h2 className="Titulo"> Insumos </h2>
        <Search />
        <div className="container">
        <Contenido>
            <Insumo/>
        </ Contenido>
        <br />
        <Paginacion />
        </div>
        </>
    );
}

export default VerInsumo;