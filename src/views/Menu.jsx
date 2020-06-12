import React from 'react';
import Contenido from '../component/Contenido'
import NavBar from '../component/NavBar';
import Botones from '../component/Botones'



const links = [
    {href: 'inicio', title:'Inicio'},
    {href: 'cerrarsesion', title: 'Cerrar Sesion'}

]

export default function Menu(){
    return(
        <>
        <NavBar links={links}/>
             <Contenido>
                 
             </Contenido>

        </>
    )
}