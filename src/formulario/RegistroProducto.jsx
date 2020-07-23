import React from 'react';
import InputLine from '../component/InputLine';
import { isEmpty } from '../utilidades/validacion';
import { registrar3 } from '../api';


export default class RegistroProducto extends React.Component{

  state={
    registerProducto:{
      nombreProducto:'',
      codigoProducto:'',
      colorProducto:'',
      medidasProducto:'',
      marcaProducto:''
    },

    errors:{
      nombreProducto: false,
      codigoProducto: false,
      colorProducto: false,
      medidasProducto: false,
      marcaProducto: false
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

  haveErrors = () =>{
    this.setState({
      errors:{
        nombreProducto:isEmpty(this.state.registerProducto.nombreProducto),
        codigoProducto:isEmpty(this.state.registerProducto.codigoProducto),
        colorProducto:isEmpty(this.state.registerProducto.colorProducto),
        medidasProducto:isEmpty(this.state.registerProducto.medidasProducto),
        marcaProducto:isEmpty(this.state.registerProducto.marcaProducto)
      }

    },()=>{this.doRegistrar()})
}

  doRegistrar = () => {

    if((this.state.errors.nombreProducto === false && 
      this.state.errors.codigoProducto === false &&
      this.state.errors.colorProducto === false &&
      this.state.errors.medidasProducto === false &&
      this.state.errors.marcaProducto === false )){
          console.log(this.state.registerProducto);
          registrar3(this.state.registerProducto)
          .then(response => {
            if(!response.ok){
              throw Error(response.statusText)
            }
          return response.text();
      })
      .then( response => {
          alert('Registro guardado con exito!')
          this.setState({
              registerProducto:{
                  nombreProducto:'',
                  codigoProducto:'',      
                  colorProducto:'',
                  medidasProducto:'',
                  marcaProducto:''
              }
          })
          }
      ).catch(err=>{})
    }
  }

    render(){

      const{
        nombreProducto,
        codigoProducto,
        colorProducto,
        medidasProducto,
        marcaProducto

      } = this.state.registerProducto;

      const {errors} = this.state;

    return(
      <>
        <form>
            <div className="RegistroProducto">
            <h3 className="Pruebazx">Informacion Producto</h3> <br />

            <InputLine
            name="nombreProducto"
            label="Nombre"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.nombreProducto}
            value={nombreProducto}
            />

            <InputLine
            name="codigoProducto"
            label="Codigo"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.codigoProducto}
            value={codigoProducto}
            />

             <InputLine
            name="colorProducto"
            label="Color"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.colorProducto}
            value={colorProducto}
            />
             <InputLine
            name="medidasProducto"
            label="Medidas"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.medidasProducto}
            value={medidasProducto}
            />

             <InputLine
            name="marcaProducto"
            label= "Marca"
            type="text"
            required={true}
            onChange={this.onChange}
            error={errors.marcaProducto}
            value={marcaProducto}
            />

          </div> 

        </form>

        <div className="botonlogin">
            <input class="mr-5 btn btn-primary"  type="submit" value="Guardar" onClick={this.haveErrors}/>
            <input class="mr-10 btn btn-danger"  type="submit" value="Cancelar"/>
        </div>
      </>

    );
    }
}
