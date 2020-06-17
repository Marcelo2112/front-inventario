import React from 'react';
import InputLine from '../component/InputLine';
import { isEmpty } from '../utilidades/validacion';



export default class RegistroProveedor extends React.Component{
    state={
        registerProveedor:{
            nombreEmpresa:'',
            rutEmpresa:'',
            nombre:'',
            apellido:'',
            telefono:'',
            email:''
        },
        errors:{
            nombreEmpresa: false,
            rutEmpresa: false,
            nombre: false,
            apellido: false,
            telefono: false,
            email: false

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

    doRegister = (event) => {
        const{
            nombreEmpresa,
            rutEmpresa,
            nombre,
            apellido,
            telefono,
            email

        } = this.state.registerProveedor;


        const nombreEmpresaError = isEmpty(nombreEmpresa);
        const rutEmpresaError = isEmpty (rutEmpresa);
        const nombreError = isEmpty (nombre);
        const apellidoError = isEmpty(apellido);
        const telefonoError = isEmpty (telefono);
        const emailError = isEmpty (email);

        this.setState({
            errors:{
                nombreEmpresa:nombreEmpresaError,
                rutEmpresa:rutEmpresaError,
                nombre: nombreError,
                apellido: apellidoError,
                telefono: telefonoError,
                email: emailError



            }
              });

        event.preventDefault();
    }








    render(){

        const{
            nombreEmpresa,
            rutEmpresa,
            nombre,
            apellido,
            telefono,
            email

        } = this.state.registerProveedor;

        const {errors} = this.state;

    return (
      <>
          <form >
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
              />

              <InputLine
              name="email"
              label= "Correo"
              type="email"
              required={true}
              onChange={this.onChange}
              error={errors.email}
              value={email}
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
