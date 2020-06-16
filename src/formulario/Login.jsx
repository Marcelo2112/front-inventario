import React from 'react';
import InputLine from '../component/InputLine';

export default class Login extends React.Component{
    doLogin = (event) => {
      this.props.history.push('/menu')

      event.preventDefault()
    }

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
                 <button onClick={this.doLogin}>Ingresar</button>
                 <button>Recuperar Contrase&ntilde;a</button>
             </div>
        </form>
        );
    }
}
