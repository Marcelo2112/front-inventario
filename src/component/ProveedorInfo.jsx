import React from 'react';
import Proveedor from '../listas/Proveedor'
import {getDeliveries} from '../api';


export default class ProveedorInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            proveedores: []
        
        }
    }
    componentDidMount() {
        getDeliveries()
        .then(response =>{
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(proveedores =>{
            
            this.setState({ proveedores });
        })
        .catch(err =>{
            console.log(err);
            alert('No fue posible cargar sus pedidos');
           
        })
    }
  
    render() {
        return(
        <Proveedor proveedores={this.state.proveedores}/>
        );

    }

} 