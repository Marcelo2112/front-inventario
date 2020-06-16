import React from 'react'
import Contenido from '../component/Contenido';
import NavBar from '../component/NavBar';
import Proveedor from '../listas/Proveedor';

const links = [
    {href:'inicio', title: 'Inicio'},
    {href: 'cerrarsesion', title: 'Cerrar Sesion'}


]


function VerProveedor (){
        return (
        <>
        <NavBar links={links}/>
        <h2 className="TituloProducto"> Ver Proveedor </h2>
        <Contenido >
            <Proveedor/>
        </Contenido>

        </>    
    );
}

export default VerProveedor;