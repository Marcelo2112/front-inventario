import React from 'react';

export default class Inventario extends React.Component {
  render(){
    return(
      <>
      <form>
          <table className="tabla">
           <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Cantidad</th>

           </tr>
          <tr>
              <td>5874698</td>
              <td>Herramienta</td>
              <td>Descrpcion 1</td>
              <td>20</td>

           </tr>
          <tr>
              <td>5963245</td>
              <td>Herramienta 2</td>
              <td>Descrpcion 2</td>
              <td>15</td>
          </tr>
          <tr>
              <td>5965645</td>
              <td>Herramienta 3</td>
              <td>Descrpcion 3</td>
              <td>10</td>
          </tr>
          </table>
      </form>
      </>
    );
  }
}
