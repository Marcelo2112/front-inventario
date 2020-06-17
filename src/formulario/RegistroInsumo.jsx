import React from 'react';
import InputLine from '../component/InputLine';
import { isEmpty } from '../utilidades/validacion';



export default class RegistroInsumo extends React.Component{
    state={
        registerInsumo:{
            nombreInsumo:'',
            codigoInsumo:'',
            cantidadInsumo:'',        
            colorInsumo:'',
            medidasInsumo:'',
            marcaInsumo:'',
            nombreProveedor:'',
            rutProveedor:'',
            nombreEncargado:''            
        },
        errors:{
            nombreInsumo: false,
            codigoInsumo: false,
            cantidadInsumo: false, 
            colorInsumo: false,
            medidasInsumo: false,
            marcaInsumo: false,
            nombreProveedor: false,
            rutProveedor: false,
            nombreEncargado: false 

        }
    };


    onChange =(name, event) => {
        const value = event.target.value;
        const registerInsumo= Object.assign({},this.state.registerInsumo);
        registerInsumo[name]= value;
        this.setState({
            registerInsumo
        });
    }

    doRegister = (event) => {
        const{
            nombreInsumo,
            codigoInsumo,
            cantidadInsumo,
            colorInsumo,
            medidasInsumo,
            marcaInsumo,
            nombreProveedor,
            rutProveedor,
            nombreEncargado 

        } = this.state.registerInsumo;


        const nombreInsumoError = isEmpty(nombreInsumo);
        const codigoInsumoError = isEmpty (codigoInsumo);
        const cantidadInsumoError = isEmpty (cantidadInsumo);
        const colorInsumoError = isEmpty (colorInsumo);
        const medidasInsumoError = isEmpty (medidasInsumo);
        const marcaInsumoError = isEmpty (marcaInsumo);
        const nombreProveedorError = isEmpty (nombreProveedor);
        const rutProveedorError = isEmpty (rutProveedor);
        const nombreEncargadoError = isEmpty (nombreEncargado);

        this.setState({
            errors:{
                nombreInsumo:nombreInsumoError,
                codigoInsumo:codigoInsumoError,
                cantidadInsumo:cantidadInsumoError,
                colorInsumo: colorInsumoError,
                medidasInsumo: medidasInsumoError,
                marcaInsumo: marcaInsumoError,
                nombreProveedor: nombreProveedorError,
                rutProveedor: rutProveedorError,
                nombreEncargado: nombreEncargadoError
            }
        });

        event.preventDefault();
    }

    render(){

        const{
            nombreInsumo,
            codigoInsumo,
            cantidadInsumo,
            colorInsumo,
            medidasInsumo,
            marcaInsumo,
            nombreProveedor,
            rutProveedor,
            nombreEncargado

        } = this.state.registerInsumo;

        const {errors} = this.state;

    return (
        <>
            <form>
                <div className="registroInsumo">

                <InputLine
                name="nombreInsumo"
                label="Nombre Insumo"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.nombreInsumo}
                value={nombreInsumo}
                />

                <InputLine
                name="codigoInsumo"
                label="Codigo"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.codigoInsumo}
                value={codigoInsumo}
                />
                
                <InputLine
                name="cantidadInsumo"
                label="Cantidad"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.cantidadInsumo}
                value={cantidadInsumo}
                />

                <InputLine
                name="colorInsumo"
                label="Color"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.colorInsumo}
                value={colorInsumo}
                />

                <InputLine
                name="medidasInsumo"
                label="Medidas"
                type="text"
                required={true}
                onChange={this.onChange}
                error={errors.medidasInsumo}
                value={medidasInsumo}
                />

                <InputLine
                name="marcaInsumo"
                label= "Marca"
                type="marcaInsumo"
                required={true}
                onChange={this.onChange}
                error={errors.marcaInsumo}
                value={marcaInsumo}
                />

                <h3 className = "tituloparrilla" >Proveedor</h3> <br/>

                <InputLine
                name="nombreProveedor"
                label= "Proveedor"
                type="nombreProveedor"
                required={true}
                onChange={this.onChange}
                error={errors.nombreProveedor}
                value={nombreProveedor}
                />

                <InputLine
                name="rutProveedor"
                label= "Rut"
                type="rutProveedor"
                required={true}
                onChange={this.onChange}
                error={errors.rutProveedor}
                value={rutProveedor}
                />

                <InputLine
                name="nombreEncargado"
                label= "Nombre"
                type="nombreEncargado"
                required={true}
                onChange={this.onChange}
                error={errors.nombreEncargado}
                value={nombreEncargado}
                />

                </div>

               </form>

            <div className="botonlogin">
                <input class="mr-5 btn btn-primary"  type="submit" value="Guardar" onClick={this.doRegister}/>
                <input class="mr-10 btn btn-danger"  type="submit" value="Cancelar"/>
            </div>
        </>
        

    );
    }
}
