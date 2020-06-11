import React from 'react';
import InputLine from '../component/InputLine';

export default class Login extends React.Component{
    render (){
        return(

        <form>
            <InputLine
            name="nombre"
            label="Nombre"
            type="text"
             />

             <InputLine 
             name="password"
             label="Contrase&ntilde;a"
             type="password"
             
             />

             <div className="botonlogin">
                 <button>Ingresar</button>
                 <button>Recuperar password</button>
             </div>
        </form>
        );
    }
}