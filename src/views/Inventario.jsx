import React from 'react';
import NavBar from '../component/NavBar';
import RegistroProducto from '../formulario/RegistroProducto';
import Target from '../component/Target';

const links = [
    {href: 'menu', title:'Inicio'},
    {href: 'sesion', title: 'Cerrar Sesion'}
]





function Inventario(){

    return (
        <>
        <NavBar links={links}/>
        <Target title="Registro Producto">
            <RegistroProducto />
        </Target>



        </>
    )

}


export default Inventario;
