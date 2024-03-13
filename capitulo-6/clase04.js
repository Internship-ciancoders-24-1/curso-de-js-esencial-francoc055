const URL = 'https://swapi.py4e.com/api/';
const people = 'people/:id';

$.get(`${URL}${people.replace(':id', 1)}`, { crossDomain: true }, function(data){
    console.log(`Hola yo soy ${data.name}`);
})
