let juan = {
    nombre: 'juan',
    apellido: 'peres',
    edad: 22,
    ingeniero: true,
    cocinero: false,
    cantante: false
}

function mayorDeEdad(juan)
{
    if(juan.edad >= 18)
    {
        console.log('mayor de edad');
    }
    else{
        console.log('menor de edad');
    }
}

mayorDeEdad(juan)