//DESTRUCTURING

let juan = {
    'nombre': 'juan',
    'apellido': 'peres',
    'edad': 22,
}

function imprimirNombreEnMayus(persona){
    let {nombre} = persona
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayus(juan)