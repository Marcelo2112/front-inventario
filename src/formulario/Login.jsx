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
                 <input class="mr-5 btn btn-primary"  type="submit" value="Ingresar" onClick={this.doLogin}/>
                 <input className="ml-5 btn btn-danger" type="submit" value="Recuperar Contrase&ntilde;a" />
             </div>
        </form>
        );
    }
}
