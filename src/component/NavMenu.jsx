import React from 'react';
import {Link} from 'react-router-dom';


export default class NavMenu extends React.Component {
    constructor (){
        super();
    }
    render () {
        return (
        <section>
            <nav className="navMenu">
                <ul className="ulMenu">
                 {this.props.links.map((link, key) => <li className="textMenu" key={key}><Link to={link.href}>{link.title}</Link></li>)}
                </ul>
            </nav>


        </section>
    )}


}