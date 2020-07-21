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
