const URL = 'https://swapi.py4e.com/api/';
const people = 'people/:id';


function obtenerPersonaje(id){
    const url = `${URL}${people.replace(':id', id)}`;
    return new Promise((res, rej)=>{
        $.get(url, { crossDomain: true }, function(data){
            res(data)
        })
        .fail(()=> rej(id))
    }) 
}

let ids = [1,2,3,4,5,6,7]
let promesas = ids.map(id => obtenerPersonaje(id))

Promise
.all(promesas)
.then(personaje => console.log(personaje))
.catch(err => console.log(`Error al obtener el personaje ${err}`))



// obtenerPersonaje(1)
// .then(res => {
//     console.log(`Personaje: ${res.name}`)
//     return obtenerPersonaje(2)
// })
// .then(res => {
//     console.log(`Personaje: ${res.name}`)
//     return obtenerPersonaje(3)
// })
// .then(res => {
//     console.log(`Personaje: ${res.name}`)

// })
// .catch(err => console.log(`Error al obtener el personaje ${err}`))

