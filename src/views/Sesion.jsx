import React from 'react';
import NavBar from '../component/NavBar'
import Target from '../component/Target'
import Login from '../formulario/Login'


const links = [
    {href: 'inicio', title: 'Inicio'}
]




function Sesion (props){
    return (
        <>
        <NavBar links={links}/>
        <Target title="Ingresar">
        <Login {...props}/>
        </Target>

        </>
    )
}

export default Sesion;
