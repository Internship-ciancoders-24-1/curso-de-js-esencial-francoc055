//VALORES POR REFERENCIA

let juan = {
    'nombre': 'juan',
    'apellido': 'peres',
    'edad': 22,
}

function aumentarEdad(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
aumentarEdad(juan)