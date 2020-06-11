import React from 'react';
import NavBar from '../component/NavBar'
import Target from '../component/Target'
import Login from '../formulario/Login'


const links = [
    {href: 'inicio', title: 'Inicio'}
]




function Sesion (){
    return (
        <>
        <NavBar links={links}/>
        <Target title="Ingresar">
        <Login/>
        </Target>
    
        </>
    )
}

export default Sesion;