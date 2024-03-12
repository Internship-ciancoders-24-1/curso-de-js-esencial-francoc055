let juan = {
    nombre: 'juan',
    apellido: 'peres',
    edad: 22,
    altura: 1.78
}
let franco = {
    nombre: 'franco',
    apellido: 'armani',
    edad: 22,
    altura: 1.89
}
let paula = {
    nombre: 'paula',
    apellido: 'lopez',
    edad: 22,
    altura: 1.67
}

let personas = [juan, franco, paula]

const esAlta = (persona) => persona.altura >= 1.8

const personasAltas = personas.filter(esAlta)
console.log(personasAltas);