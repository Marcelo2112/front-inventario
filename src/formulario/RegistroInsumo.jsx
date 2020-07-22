import React from 'react';
import InputLine from '../component/InputLine';
import { isEmpty } from '../utilidades/validacion';
import { registrar2 } from '../api';



export default class RegistroInsumo extends React.Component{
    state={
        registerInsumo:{
            nombreInsumo:'',
            codigoInsumo:'',
            cantidadInsumo:'',        
            colorInsumo:'',
            medidasInsumo:'',
            marcaInsumo:''         
        },
        errors:{
            nombreInsumo: false,
            codigoInsumo: false,
            cantidadInsumo: false, 
            colorInsumo: false,
            medidasInsumo: false,
            marcaInsumo: false
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

    haveErrors = () =>{
        this.setState({
            errors:{
                nombreInsumo:isEmpty(this.state.registerInsumo.nombreInsumo),
                codigoInsumo:isEmpty(this.state.registerInsumo.codigoInsumo),
                cantidadInsumo:isEmpty(this.state.registerInsumo.cantidadInsumo),
                medidasInsumo:isEmpty(this.state.registerInsumo.medidasInsumo),
                marcaInsumo:isEmpty(this.state.registerInsumo.marcaInsumo)
            }
        },()=>{this.doRegistrar()})
    }


    doRegistrar = () => {
        if((this.state.errors.nombreInsumo === false && 
            this.state.errors.codigoInsumo === false &&
            this.state.errors.cantidadInsumo === false &&
            this.state.errors.medidasInsumo === false &&
            this.state.errors.marcaInsumo === false )){
                console.log(this.state.registerInsumo);
                registrar2(this.state.registerInsumo)
                .then(response => {
                if(!response.ok){
                    throw Error(response.statusText)
                }
                return response.text();
            })
            .then( response => {
                alert('Registro guardado con exito!')
                this.setState({
                    registerInsumo:{
                        nombreInsumo:'',
                        codigoInsumo:'',
                        cantidadInsumo:'',        
                        colorInsumo:'',
                        medidasInsumo:'',
                        marcaInsumo:''
                    }

                })
                }
            ).catch(
                err=>{
                    
                                }
                        )
                    }
            }

    render(){

        const{
            nombreInsumo,
            codigoInsumo,
            cantidadInsumo,
            colorInsumo,
            medidasInsumo,
            marcaInsumo

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


                </div>

               </form>

            <div className="botonlogin">
                <input class="mr-5 btn btn-primary"
                type="submit" value="Guardar"
                onClick={this.haveErrors}/>
                <input class="mr-10 btn btn-danger"  type="submit" value="Cancelar"/>
            </div>
        </>
        

    );
    }
}
