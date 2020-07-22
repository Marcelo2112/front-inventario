import React from 'react';
import Insumo from '../listas/Insumo'
import {verInsumo} from '../api';


export default class InsumoInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            insumos: []
        
        }
    }
    componentDidMount() {
        verInsumo()
        .then(response =>{
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(insumos =>{
            
            this.setState({ insumos });
        })
        .catch(err =>{
            console.log(err);
            alert('No es posible cargar la lista');
           
        })
    }
  
    render() {
        return(
        <Insumo insumos={this.state.insumos}/>
        );

    }

} 