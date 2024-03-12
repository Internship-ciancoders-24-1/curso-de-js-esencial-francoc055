//OBJETOS

let juan = {
    'nombre': 'juan',
    'apellido': 'peres',
    'edad': 22,
}

function imprimirNombreEnMayus({nombre}){
    nombre = nombre.toUpperCase()
    console.log(nombre);
}

imprimirNombreEnMayus(juan)