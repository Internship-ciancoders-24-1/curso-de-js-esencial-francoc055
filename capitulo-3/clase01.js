let juan = {
    nombre: 'juan',
    apellido: 'peres',
    edad: 22,
    ingeniero: true,
    cocinero: false,
    cantante: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);

    if(persona.ingeniero)
    {
        console.log("ingeniero");
    }
    if(persona.cocinero)
    {
        console.log("cocinero");
    }
    if(persona.cantante)
    {
        console.log("cantante");
    }
}

imprimirProfesiones(juan)



