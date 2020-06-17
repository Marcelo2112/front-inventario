import React from 'react';





export default function Paginacion(){
  return(
    <>
    <nav aria-label="Page navigation example">
     <ul className="pagination justify-content-end">
      <li className="page-item disabled">
       <a className="page-link" href="#" tabindex="1">Anterior</a>
      </li>
      <li className="page-item active">
       <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
      </li>
      <li className="page-item">
       <a className="page-link" href="#"> 2</a>
      </li>
      <li className="page-item"><a className="page-link" href="#">3</a>
      </li>
      <li className="page-item">
       <a className="page-link" href="#">Proximo</a>
      </li>
     </ul>
    </nav>
    </>
  );

}
