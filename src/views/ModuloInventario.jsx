import React from 'react';
import Contenido from '../component/Contenido'
import NavBar from '../component/NavBar';
import NavMenu from '../component/NavMenu';



const links = [
    {href: 'menu', title:'Inicio'},
    {href: 'logout', title: 'Cerrar Sesion'}

]
const modulo = [
    {href: 'verinventario', title:'Ver Inventario'},
    {href: 'registroproducto', title:'Agregar Producto'}

]



export default function ModuloInventario(){
    return(
        <>
        <NavBar links={links}/>
          <h2 className="Titulo"> Modulo Inventario </h2>
             <Contenido>
                 <NavMenu links ={modulo}/>
             </Contenido>

        </>
    )
}
