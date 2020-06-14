import React from 'react';
import InputLine from '../component/InputLine';


export default class RegistroProveedor extends React.Component{
    render(){
    return (
        <form > 
            <div className="registroProveedor">
            <InputLine
            name="nombreEmpresa"
            label=" Nombre Empresa"
            type="text"
            />

            <InputLine
            name="rutEmpresa"
            label=" Rut Empresa"
            type="text"
            />

             <InputLine
            name="nombre"
            label=" Nombre Personal"
            type="text"
            />
             <InputLine
            name="apellido"
            label=" Apellido Personal"
            type="text"
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
            />
            </div>
            <div className="botonlogin">
                <button >Guardar</button>
                <button className="botonCancelar">Cancelar</button>
            </div>

        </form>

    );
    }
}