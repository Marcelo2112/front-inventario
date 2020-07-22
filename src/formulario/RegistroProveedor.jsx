import React from 'react';
import InputLine from '../component/InputLine';
import { isEmpty } from '../utilidades/validacion';
import { registrar } from '../api';



export default class RegistroProveedor extends React.Component{
    state={
        registerProveedor:{
            nombreEmpresa:'',
            rutEmpresa:'',
            nombre:'',
            apellido:'',
            telefono:''
        },
        errors:{
            nombreEmpresa: false,
            rutEmpresa: false,
            nombre: false,
            apellido: false,
            telefono: false

        }
    };

    onChange =(name, event) => {
        const value = event.target.value;
        const registerProveedor= Object.assign({},this.state.registerProveedor);
        registerProveedor[name]= value;
        this.setState({
            registerProveedor
        });
    } 

    haveErrors = () =>{
        this.setState({
            errors:{
                nombreEmpresa:isEmpty(this.state.registerProveedor.nombreEmpresa),
                rutEmpresa:isEmpty(this.state.registerProveedor.rutEmpresa),
                nombre:isEmpty(this.state.registerProveedor.nombre),
                apellido:isEmpty(this.state.registerProveedor.apellido),
                telefono:isEmpty(this.state.registerProveedor.telefono)
            }
        },()=>{this.doRegistrar()})
    }


    doRegistrar = () => {
        if((this.state.errors.nombreEmpresa === false && 
            this.state.errors.rutEmpresa === false &&
            this.state.errors.nombre === false &&
            this.state.errors.apellido === false )){
                console.log(this.state.registerProveedor);
                registrar(this.state.registerProveedor)
                .then(response => {
                if(!response.ok){
                    throw Error(response.statusText)
                }
                return response.text();
            })
            .then( response => {
                alert('Registro guardado con exito!')
                this.setState({
                    registerProveedor:{
                        nombreEmpresa:'',
                        rutEmpresa:'',
                        nombre:'',
                        apellido:'',
                        telefono:''
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
            nombreEmpresa,
            rutEmpresa,
            nombre,
            apellido,
            telefono

        } = this.state.registerProveedor;

        const {errors} = this.state;

    return (
      <>
          <form className="tarjeta2020" >
           
              <div className="registroProveedor">
              <InputLine
              name="nombreEmpresa"
              label=" Nombre Empresa"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.nombreEmpresa}
              value={nombreEmpresa}
              />

              <InputLine
              name="rutEmpresa"
              label=" Rut Empresa"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.rutEmpresa}
              value={rutEmpresa}
              />

               <InputLine
              name="nombre"
              label=" Nombre Personal"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.nombre}
              value={nombre}
              />
               <InputLine
              name="apellido"
              label=" Apellido Personal"
              type="text"
              required={true}
              onChange={this.onChange}
              error={errors.apellido}
              value={apellido}
              />

               <InputLine
              name="telefono"
              label= "Telefono"
              type="text"
              onChange={this.onChange}
              value={telefono}
              required={false}
              />

              
              </div>

          </form>
          <div className="botonlogin">
              <input className="mr-5 btn btn-primary"
              type="submit" value="Guardar"
              onClick={this.haveErrors}/>
              <input className="mr-10 btn btn-danger"
              type="submit"
              value="Cancelar"/>
              
          </div>
        </>




    );
    }
}
