import React from 'react';
import Contenido from '../component/Contenido'
import NavBar from '../component/NavBar';
import NavMenu from '../component/NavMenu';



const links = [
    {href: 'menu', title:'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}

]
const modulo = [
    {href: 'verInsumo', title:'Ver Insumo'},
    {href: 'registroInsumo', title:'Agregar Insumo'}

]



export default function ModuloInventario(){
    return(
        <>
        <NavBar links={links}/>
          <h2 className="Titulo"> Modulo Insumo </h2>
             <Contenido>
                 <NavMenu links ={modulo}/>
             </Contenido>

        </>
    )
}