import React from 'react'
import Contenido from '../component/Contenido';
import NavBar from '../component/NavBar';
import Search from '../component/Search';
import Paginacion from '../component/Paginacion';
import InsumoInfo from '../component/InsumoInfo'

const links = [
    {href:'menu', title: 'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}


]


function VerInsumo (){
    return (
        <>
        <NavBar links={links}/>
        <h2 className="Titulo"> Insumos </h2>
        <Search />
        <div className="container">
        <Contenido>
            <InsumoInfo/>
        </ Contenido>
        <br />
        <Paginacion />
        </div>
        </>
    );
}

export default VerInsumo;