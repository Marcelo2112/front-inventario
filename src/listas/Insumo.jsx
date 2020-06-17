import React from 'react';

export default class Insumo extends React.Component {
    render(){
        return (
            <form>  
                <table className="tabla">
                 <tr>
                    <th>Insumo</th>
                    <th>Codigo</th>
                    <th>Cantidad</th>
                    <th>Color</th>
                    <th>Medidas</th>
                    <th>Marca</th>
                    <th>Proveedor</th>
                    <th>Rut</th>
                    <th>Encargado</th>                    
                 </tr>

                <tr>
                    <td>Silla</td>
                    <td>25332</td>
                    <td>20</td>
                    <td>Cafe</td>
                    <td>100x200x300</td>
                    <td>Marca1</td>
                    <td>Proveedor1</td>
                    <td>25.486.425-5</td>
                    <td>Matias C</td>
                    
                 </tr>

                <tr>
                    <td>Mesa</td>
                    <td>25333</td>
                    <td>10</td>
                    <td>Cafe</td>
                    <td>100x200x300</td>
                    <td>Marca1</td>
                    <td>Proveedor1</td>
                    <td>25.486.425-5</td>
                    <td>Matias C</td>
                   </tr>
                </table>

            </form>
        );
    }
}