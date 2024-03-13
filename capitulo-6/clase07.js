const URL = 'https://swapi.py4e.com/api/';
const people = 'people/:id';


function obtenerPersonaje(id, callback){
    const url = `${URL}${people.replace(':id', id)}`;
    $.get(url, { crossDomain: true }, callback).fail(function(){
        console.log(`Hubo un error al traer el personaje ${id}`);
    })

 
}

obtenerPersonaje(1, function(personaje){
    console.log(`Hola yo soy ${personaje.name}`);
    obtenerPersonaje(2, function(personaje){
        console.log(`Hola yo soy ${personaje.name}`);
        obtenerPersonaje(3, function(personaje){
            console.log(`Hola yo soy ${personaje.name}`);
            obtenerPersonaje(4, function(personaje){
                console.log(`Hola yo soy ${personaje.name}`);
            })
        })
    })
    
})
