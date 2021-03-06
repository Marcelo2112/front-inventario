import React from 'react';
import {Link} from 'react-router-dom';



export default function NavBar(props){
    return (
        <header>
            <div className="barranav">
            <nav>
                <ul>
                    {props.links.map((link, key) =><li className="textNav"  key ={key}><Link to={link.href}>{link.title}</Link> </li>)}
                </ul>
            </nav>
            </div>
        </header>
    );
}
