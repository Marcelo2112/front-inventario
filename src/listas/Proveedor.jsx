import React from 'react'



export default class Proveedor extends  React.Component {

    render(){
        return (
            <form>  
           
            <table className="tabla">
             <thead>
                <tr>
                  <th>Proveedor</th>
                    <th>Rut</th>
                    <th>Email</th>
                    <th>Nombre</th>
                
                </tr>
            </thead>
            <tbody>
                {this.props.proveedores.map((proveedor,key) =>(
                    <tr key={key}>
                        <td>{proveedor.nombre_empresa}</td>
                        <td>{proveedor.rut_empresa}</td>
                        <td>{proveedor.nombre_proveedor}</td>
                        <td>{proveedor.apellido_proveedor}</td>
                    </tr>
                )
                )}
            </tbody>
            </table>

        </form>
        );
    }}
