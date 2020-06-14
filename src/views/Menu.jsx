import React from 'react';
import Contenido from '../component/Contenido'
import NavBar from '../component/NavBar';
import NavMenu from '../component/NavMenu';



const links = [
    {href: 'inicio', title:'Inicio'},
    {href: 'cerrarsesion', title: 'Cerrar Sesion'}

]
const hola = [
    {href: 'inventario', title:'Inventario'},
    {href: 'solicitud', title:'Solicitud'},
    {href: 'proveedor', title:'Proveedor'},
    {href: 'insumo', title:'Insumo'}

]



export default function Menu(){
    return(
        <>
        <NavBar links={links}/>
             <Contenido>
                 <NavMenu links ={hola}/>
             </Contenido>

        </>
    )
}