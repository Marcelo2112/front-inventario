export function login (usuario){
    return fetch('http://localhost:5000/login',{
        method: 'POST',
        body: JSON.stringify({
            correo: usuario.email, 
            password: usuario.password
        }),
        headers: {
            'Content-Type': 'application/json'
        } 
    });
}
export function getDeliveries(){
    const token = localStorage.getItem('token');
    return fetch('http://localhost:5000/registerinsumo',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

    });
}

export function registrar(proveedor){
    const token = localStorage.getItem('token');
    return fetch('http://localhost:5000/registerinsumo',{
        method: 'POST',
        body: JSON.stringify({
            nombre_empresa: proveedor.nombreEmpresa,
            rut_empresa: proveedor.rutEmpresa,
            nombre_proveedor:proveedor.nombre,
            apellido_proveedor: proveedor.apellido,
            telefono_proveedor: proveedor.telefono
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}
