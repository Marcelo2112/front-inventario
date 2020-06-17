import React from 'react';
import InputLine from '../component/InputLine';
import { isEmpty } from '../utilidades/validacion';


export default class RegistroProducto extends React.Component{
  state={
      registerProducto:{
        nombre:'',
        codigo:'',
        color:'',
        medidas:'',
        marca:'',
        proveedor:'',
        rut:'',
        nombreproveedor:'',
        cantidad:''
      },
      errors:{
        nombre: false,
        codigo: false,
        color: false,
        medidas: false,
        marca: false,
        proveedor: false,
        rut: false,
        nombreproveedor: false,
        cantidad: false
      }
  };


  onChange =(name, event) => {
      const value = event.target.value;
      const registerProducto= Object.assign({},this.state.registerProducto);
      registerProducto[name]= value;
      this.setState({
          registerProducto
      });


  }

  doRegister = (event) => {
      const{
          nombre,
          codigo,
          color,
          medidas,
          marca,
          proveedor,
          rut,
          nombreproveedor,
          cantidad


      } = this.state.registerProducto;


      const nombreError = isEmpty(nombre);
      const codigoError = isEmpty (codigo);
      const colorError = isEmpty (color);
      const medidasError = isEmpty(medidas);
      const marcaError = isEmpty (marca);
      const proveedorError = isEmpty (proveedor);
      const rutError = isEmpty (rut);
      const nombreproveedorError = isEmpty(nombreproveedor);
      const cantidadError = isEmpty(cantidad);

      this.setState({
          errors:{
              nombre: nombreError,
              codigo:codigoError,
              color:colorError,
              medidas:medidasError,
              marca: marcaError,
              proveedor: proveedorError,
              rut: rutError,
              nombreproveedor: nombreproveedorError,
              cantidad: cantidadError
          }
            });

      event.preventDefault();
}


    render(){

      const{
        nombre,
        codigo,
        color,
        medidas,
        marca,
        proveedor,
        rut,
        nombreproveedor,
        cantidad

      } = this.state.registerProducto;

      const {errors} = this.state;

    return (
      <>
        <form >
            <div className="RegistroProducto">
            <h3>Informacion Producto</h3> <br />
            <InputLine
            name="nombre"
            label="Nombre"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.nombre}
            value={nombre}
            />

            <InputLine
            name="codigo"
            label="Codigo"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.codigo}
            value={codigo}
            />

             <InputLine
            name="color"
            label="Color"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.color}
            value={color}
            />
             <InputLine
            name="medidas"
            label="Medidas"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.medidas}
            value={medidas}
            />

             <InputLine
            name="marca"
            label= "Marca"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.marca}
            value={marca}
            />
            </div>

            <div className="RegistroProducto">
            <h3>Informacion Proveedor</h3> <br />

            <InputLine
            name="proveedor"
            label= "Proveedor"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.proveedor}
            value={proveedor}
            />

           <InputLine
           name="rut"
           label= "Rut"
           type="text"
           required={true}
           onChange={this.onChange}
           error={errors.rut}
           value={rut}
           />

           <InputLine
           name="nombreproveedor"
           label= "Nombre Proveedor"
           type="text"
           required={true}
           onChange={this.onChange}
           error={errors.nombreproveedor}
           value={nombreproveedor}
           />

            <InputLine
            name="cantidad"
            label="Cantidad"
            type="number"
            min="1"
            max="150"
            step="any"
            required={true}
            onChange={this.onChange}
            error={errors.cantidad}
            value={cantidad}
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
