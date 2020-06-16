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
        <h2 className="TituloProducto"> Registro Producto </h2>
        <Target>
            <RegistroProducto />
        </Target>



        </>
    )

}


export default Inventario;
