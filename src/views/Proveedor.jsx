import React from 'react';
import NavBar from '../component/NavBar';
import RegistroProveedor from '../formulario/RegistroProveedor';
import Target from '../component/Target';

const links = [
    {href: 'menu', title:'Inicio'},
    {href: 'sesion', title: 'Cerrar Sesion'}
]





function Proveedor(){

    return (
        <>
        <NavBar links={links}/>
        <Target title="Registro Proveedor">
            <RegistroProveedor/>
        </Target>



        </>
    )

}


export default Proveedor;