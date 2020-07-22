import React from 'react';
import { Redirect } from 'react-router'

function Logout (props) {
    localStorage.removeItem('token');
    return (
        <Redirect to='/sesion' />
    )
}


export default Logout;