import React from 'react';
import Producto from '../listas/Inventario'
import {verProducto} from '../api';


export default class ProductoInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            productos: []
        
        }
    }
    componentDidMount() {
        verProducto()
        .then(response =>{
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(productos =>{
            
            this.setState({ productos });
        })
        .catch(err =>{
            console.log(err);
            alert('No es posible cargar la lista');
           
        })
    }
  
    render() {
        return(
        <Producto productos={this.state.productos}/>
        );

    }

} 