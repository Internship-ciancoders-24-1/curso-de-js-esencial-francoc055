let juan = {
    nombre: 'juan',
    apellido: 'peres',
    edad: 22,
    ingeniero: true,
    cocinero: false,
    cantante: false
}

const mayorDeEdad = (juan) =>  juan.edad >= 18 ? console.log('mayor de edad') : console.log('menor de edad')


mayorDeEdad(juan)