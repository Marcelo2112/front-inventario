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

export function registrar2(insumo){
    const token = localStorage.getItem('token');
    return fetch('http://localhost:5000/registerinsumo2',{
        method: 'POST',
        body: JSON.stringify({

            nombre_insumo :insumo.nombreInsumo,
            codigo_insumo : insumo.codigoInsumo,
            cantidad_insumo: insumo.cantidadInsumo,
            color_insumo : insumo.colorInsumo,
            medidas_insumo : insumo.medidasInsumo,
            marca_insumo : insumo.marcaInsumo
            
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}

export function registrar3(producto){
    const token = localStorage.getItem('token');
    return fetch('http://localhost:5000/registerinsumo3',{
        method: 'POST',
        body: JSON.stringify({

            nombre_producto :producto.nombreProducto,
            codigo_producto : producto.codigoProducto,
            color_producto : producto.colorProducto,
            medidas_producto : producto.medidasProducto,
            marca_producto : producto.marcaProducto
            
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}

export function verInsumo(){
    const token = localStorage.getItem('token');
    return fetch('http://localhost:5000/registerinsumo2',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

    });
}

export function verProducto(){
    const token = localStorage.getItem('token');
    return fetch('http://localhost:5000/registerinsumo3',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

    });
}