let juan = {
    nombre: 'juan',
    apellido: 'peres',
    edad: 22,
    peso: 70
}

const aumentarPeso = (persona) => persona.peso += 0.200;
const adelgazarPeso = (persona) => persona.peso -= 0.200;

console.log(`Principio de anio, peso = ${juan.peso.toFixed(3)}`);


for(i = 0; i <= 365; i++)
{
    let random = Math.random()

    if(random < 0.25)
    {
        aumentarPeso(juan)
    }else if(random > 0.5)
    {
        adelgazarPeso(juan)
    }
}

console.log(`fin de anio, peso = ${juan.peso.toFixed(3)}`);


