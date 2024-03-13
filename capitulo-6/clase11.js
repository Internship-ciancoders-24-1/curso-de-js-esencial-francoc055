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

async function obtenerPersonajes(){
    let ids = [1,2,3,4,5,6,7]
    let promesas = ids.map(id => obtenerPersonaje(id))
    try{
        let personajes = await Promise.all(promesas)
        console.log(personajes);
    }
    catch(id){
        console.log(`Error al obtener el personaje ${id}`)
    }

}

obtenerPersonajes()





