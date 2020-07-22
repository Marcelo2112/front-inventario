import React from 'react';
import NavBar from '../component/NavBar';
import RegistroInsumo from '../formulario/RegistroInsumo';
import Target from '../component/Target';

const links = [
    {href: 'menu', title:'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}
]

function Insumo(){

    return (
        <>
        <NavBar links={links}/>
        <h2 className="TituloProducto"> Registrar Insumo </h2>
        <Target title="Informacion Insumo">
            <RegistroInsumo/>
        </Target>

        </>
    )

}


export default Insumo;