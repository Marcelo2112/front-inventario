import React from 'react';
import InputLine from '../component/InputLine';


export default class RegistroProducto extends React.Component{
    render(){
    return (
        <form >
            <div className="RegistroProducto">
            <h3>Informacion Producto</h3> <br />
            <InputLine
            name="nombre"
            label="Nombre"
            type="text"
            />

            <InputLine
            name="codigo"
            label="Codigo"
            type="text"
            />

             <InputLine
            name="color"
            label="Color"
            type="text"
            />
             <InputLine
            name="medidas"
            label="Medidas"
            type="text"
            />

             <InputLine
            name="marca"
            label= "Marca"
            type="text"
            />
            </div>

            <div className="RegistroProducto">
            <h3>Informacion Proveedor</h3> <br />

            <InputLine
            name="proveedor"
            label= "Proveedor"
            type="text"
            />

           <InputLine
           name="rut"
           label= "Rut"
           type="text"
           />

           <InputLine
           name="nombre"
           label= "Nombre"
           type="text"
           />

            <InputLine
            name="cantidad"
            label="Cantidad"
            type="number"
            min="1"
            max="150"
            step="any"
            />

            </div>

            <div className="text-center">
                <button className="btn btn-outline-primary mr-5 " type="button">Guardar</button>
                <button type="button" className="btn btn-outline-danger ml-5">Cancelar</button>
            </div>

        </form>

    );
    }
}
