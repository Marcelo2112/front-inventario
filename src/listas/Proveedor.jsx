import React from 'react'



export default class Proveedor extends React.Component {
    render(){
        return (
            <form>  
                <table className="tabla">
                 <tr>
                    <th>Proveedor</th>
                    <th>Rut</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    
                 </tr>
                <tr>
                    <td>Proveedor1</td>
                    <td>25.486.425-5</td>
                    <td>provedor1@email.cl</td>
                    <td>Matias C</td>
                    
                 </tr>
                <tr>
                    <td>Proveedor2</td>
                    <td>25.526.524-9</td>
                    <td>provedor2@email.cl</td>
                    <td>Marcelo C</td>
                   </tr>
                </table>

            </form>
        );
    }
}