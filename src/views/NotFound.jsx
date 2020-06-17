import React from 'react';
import NavBar from '../component/NavBar';
import Contenido from '../component/Contenido';




const links = [
    {href: 'menu', title:'inicio'},
    {href: 'cerrarsesion', title: 'Cerrar Sesion'}

];



function NotFound() {
    return (
        <>
    <NavBar links={links} />
    <Contenido title="Pagina en mantencion :)"/>  
      
    </>
    );

}

export default NotFound;