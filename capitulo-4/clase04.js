let juan = {
    nombre: 'juan',
    apellido: 'peres',
    edad: 29,
    altura: 1.78,
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
    edad: 52,
    altura: 1.67
}

let personas = [juan, franco, paula]

let edadTotal = personas.reduce((acum, p) => {
    return acum + p.edad
}, 0)

console.log(edadTotal);