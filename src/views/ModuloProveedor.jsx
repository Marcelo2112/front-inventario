import React from 'react';
import Contenido from '../component/Contenido'
import NavBar from '../component/NavBar';
import NavMenu from '../component/NavMenu';



const links = [
    {href: 'menu', title:'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}

]
const modulo = [
    {href: 'verproveedor', title:'Ver Proveedor'},
    {href: 'registroproveedor', title:'Agregar Proveedor'}

]



export default function ModuloInventario(){
    return(
        <>
        <NavBar links={links}/>
          <h2 className="Titulo"> Modulo Proveedor </h2>
             <Contenido>
                 <NavMenu links ={modulo}/>
             </Contenido>

        </>
    )
}