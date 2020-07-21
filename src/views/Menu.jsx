import React from 'react';
import Contenido from '../component/Contenido'
import NavBar from '../component/NavBar';
import NavMenu from '../component/NavMenu';



const links = [
    {href: 'inicio', title:'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}

]
const hola = [
    {href: 'moduloinventario', title:'Inventario'},
    {href: 'solicitud', title:'Solicitud'},
    {href: 'moduloproveedor', title:'Proveedor'},
    {href: 'moduloinsumo', title:'Insumo'}

]

export default function Menu(){
    return(
        <>
        <NavBar links={links}/>
        <h2 className="Titulo"> Menu </h2>
             <Contenido>
                 <NavMenu links ={hola}/>
             </Contenido>

        </>
    )
}
