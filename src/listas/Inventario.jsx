import React from 'react';

export default class Inventario extends React.Component {
  render(){
    return(
     
      <form>
          <table className="tabla">
          <thead>
           <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Color</th>
              <th>Medidas</th>
              <th>Marca</th>

           </tr>
           </thead>
           <tbody>
                {this.props.productos.map((producto,key) =>(
                    <tr key={key}>
                        <td>{producto.codigo_producto}</td>
                        <td>{producto.nombre_producto}</td>
                        <td>{producto.color_producto}</td>
                        <td>{producto.medidas_producto}</td>
                        <td>{producto.marca_producto}</td>
                    </tr>
                )
                )}
            </tbody>
          </table>
      </form>
    );
  }
}
