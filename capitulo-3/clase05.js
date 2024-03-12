let juan = {
    nombre: 'juan',
    apellido: 'peres',
    edad: 22,
    peso: 70
}
const pesoMeta = 68


const aumentarPeso = (persona) => persona.peso += 0.1;
const adelgazarPeso = (persona) => persona.peso -= 0.6;

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while(juan.peso > pesoMeta)
{
    if(comeMucho())
    {
        aumentarPeso(juan)
    }
    else if(realizaDeporte())
    {
        adelgazarPeso(juan)
    }
}

console.log(`Meta finalizada, peso = ${juan.peso.toFixed(2)}`);