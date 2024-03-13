const URL = 'https://swapi.py4e.com/api/';
const people = 'people/:id';


function obtenerPersonaje(id){
    const url = `${URL}${people.replace(':id', id)}`;
    $.get(url, { crossDomain: true }, function(data){
        console.log(`Hola yo soy ${data.name}`);
    })
}

obtenerPersonaje(3)
