import React from 'react'

export default function Search(){
  return(
    <>
    <nav className="navbar navbar-light container">
     <form className="form-inline" action="/action_page.php">
      <div className="row">
       <input className="form-control mr-sm-2" type="text" placeholder="Search" />
       <input className="btn btn-success" type="submit" value="Buscar"></input>
      </div>
     </form>
    </nav>
    </>
  );
}
