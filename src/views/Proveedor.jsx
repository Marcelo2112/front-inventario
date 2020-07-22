import React from 'react';
import NavBar from '../component/NavBar';
import RegistroProveedor from '../formulario/RegistroProveedor';
import Target from '../component/Target';

const links = [
    {href: 'menu', title:'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}
]





function Proveedor(){

    return (
        <>
        <NavBar links={links}/>
        <h2 className="TituloProducto"> Registrar Proveedor </h2>
        <Target title="Informacion Proveedor">
            <RegistroProveedor/>
        </Target>



        </>
    )

}


export default Proveedor;