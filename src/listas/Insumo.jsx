import React from 'react';

export default class Insumo extends React.Component {
    render(){
        return (
            <form>  
                <table className="tabla">
                <thead>
                 <tr>
                    <th>Insumo</th>
                    <th>Codigo</th>
                    <th>Cantidad</th>
                    <th>Color</th>
                    <th>Medidas</th>
                    <th>Marca</th>               
                 </tr>
                 </thead>
                 <tbody>
                     {this.props.insumos.map((insumo,key) =>(
                         <tr key={key}>
                            <td>{insumo.nombre_insumo}</td>
                            <td>{insumo.codigo_insumo}</td>
                            <td>{insumo.cantidad_insumo}</td>
                            <td>{insumo.color_insumo}</td>
                            <td>{insumo.medidas_insumo}</td>
                            <td>{insumo.marca_insumo}</td>
                         </tr>
                )
                )}
            </tbody>
            </table>

            </form>
        );
    }
}