import React from 'react'
import Contenido from '../component/Contenido';
import NavBar from '../component/NavBar';
import Insumo from '../listas/Insumo';

const links = [
    {href:'inicio', title: 'Inicio'},
    {href: 'cerrarsesion', title: 'Cerrar Sesion'}


]


function VerInsumo (){
        return (
        <>
        <NavBar links={links}/>
        <h2 className="TituloProducto"> Ver Insumo </h2>
        <Contenido >
            <Insumo/>
        </Contenido>

        </>    
    );
}

export default VerInsumo;