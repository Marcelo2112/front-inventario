export function login (usuario){
    return fetch('http://localhost:5000/login',{
        method: 'POST',
        body: JSON.stringify({
            correo: usuario.email, 
            password: usuario.password
        }),
        headers: {
            'Content-type': 'application/json'
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
    return fetch ('http://localhost:5000/registerinsumo',{
        method: 'POST',
        body: JSON.stringify({
            nombreEmpresa: proveedor.nombre_empresa,
            rutEmpresa: proveedor.rut_empresa,
            nombre: proveedor.nombre_proveedor,
            apellido: proveedor.apellido_proveedor,
            telefono: proveedor.telefono_proveedor
        }),
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}
