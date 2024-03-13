const URL = 'https://swapi.py4e.com/api/';
const people = 'people/:id';


function obtenerPersonaje(id, callback){
    const url = `${URL}${people.replace(':id', id)}`;
    $.get(url, { crossDomain: true }, function(data){
        console.log(`Hola yo soy ${data.name}`);

        if(callback)
        {
            callback()
        }
    })

 
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3)
    })
})
