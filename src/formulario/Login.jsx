import React from 'react';
import InputLine from '../component/InputLine';
import {login} from '../api'
import {withRouter} from 'react-router-dom'
import { isEmpty } from '../utilidades/validacion';

class Login extends React.Component{

    state ={
        loginData:{
            email:'',
            password:''
        },
        errors: {
            email: false,
            password: false
        }
    }

    haveErrors = () =>{
        this.setState({
            errors:{
                email:isEmpty(this.state.loginData.email),
                password:isEmpty(this.state.loginData.password)
            }
        },()=>{this.doLogin()})
    }

    doLogin = () => {
  
        if(this.state.errors.password === false && this.state.errors.email === false){
            login(this.state.loginData)
            .then(response => {
                if(!response.ok){
                    throw Error(response.statusText)
                }
                return response.text();
            })
            .then(token => {
                localStorage.setItem('token', token)
                this.props.history.push('/menu')
                
            }).catch(
                err=>{
                    alert('Datos Incorrectos')
                }
            )
        }
    
      }

    onChange =(name, event) => {
        const value = event.target.value;
        const loginData= Object.assign({},this.state.loginData);
        loginData[name]= value;
        this.setState({
                loginData
        });
        
    
    }


    render (){
        const {email, password} = this.state.loginData;
        const {errors} = this.state;
        
        return(

        <div className="tarjeta2020">
            <InputLine
            name="email"
            label="Correo"
            type="text"
            onChange={this.onChange} 
            error={errors.email} 
            value={email}  
             />

             <InputLine
             name="password"
             label="Contrase&ntilde;a"
             type="password"
             onChange={this.onChange} 
             error={errors.password}    
             value={password} 

             />

             <div className="botonlogin tarjeta2020" >
                 <input className="mr-5 btn btn-primary"  
                 type="submit" value="Iniciar Sesion" 
                 onClick={this.haveErrors}/>
                 <input className="ml-5 btn btn-danger" 
                 type="submit" 
                 value="Recuperar Contrase&ntilde;a"  />
             </div>
        </div>
        );
    }
}



export default withRouter (Login)


/*export default class Login extends React.Component{
  /*  doLogin = (event) => {
      this.props.history.push('/menu')

      event.preventDefault()
    }*/