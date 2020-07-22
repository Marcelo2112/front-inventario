import React from 'react'
import Contenido from '../component/Contenido';
import NavBar from '../component/NavBar';
import ProveedorInfo from '../component/ProveedorInfo';





export default class VerProveedor extends React.Component{
    state={
        links : [
            {href:'menu', title: 'Inicio'},
            {href: 'logout', title: 'Cerrar Sesion'}
        
        ]

    }
    
    render (){
        
        return (
        <>
        <NavBar links={this.state.links}/>
        <h2 className="TituloProducto"> Ver Proveedor </h2>
        <Contenido >
            <ProveedorInfo/>
        </Contenido>

        </>    
    );
}}

