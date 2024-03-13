const colores = ['red', 'yellow', 'green', 'blue']
let patron = []
let patronUsuario = []
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

let clicks = 0;

document.getElementById('btn').addEventListener('click', ()=>{
    generarPatron()
})


function generarPatron(){
    clicks = 0;
    console.log(`maquina: ${patron}`);
    console.log(`usuario: ${patronUsuario}`);
        // debugger
    if(!verificarPatron())
    {
        patron = []
        patronUsuario = []
        alert('game over')
        return
    }
    patronUsuario = []
    let indice = Math.floor(Math.random() * (3 - 0 + 1));
    patron.push(colores[indice]);
    resaltarColor(patron)
}


function resaltarColor(patron, index = 0) {
    if (index >= patron.length) {
        return;
    }

    switch (patron[index]) {
        case 'red':
            red.style.opacity = 0.5;
            setTimeout(() => {
                red.style.opacity = 1;
                setTimeout(() => {
                    resaltarColor(patron, index + 1);
                }, 200); 
            }, 500);
            break;
        case 'yellow':
            yellow.style.opacity = 0.5;
            setTimeout(() => {
                yellow.style.opacity = 1;
                setTimeout(() => {
                    resaltarColor(patron, index + 1);
                }, 200); 
            }, 500);
            break;
        case 'blue':
            blue.style.opacity = 0.5;
            setTimeout(() => {
                blue.style.opacity = 1;
                setTimeout(() => {
                    resaltarColor(patron, index + 1);
                }, 200); 
            }, 500);
            break;
        case 'green':
            green.style.opacity = 0.5;
            setTimeout(() => {
                green.style.opacity = 1;
                setTimeout(() => {
                    resaltarColor(patron, index + 1);
                }, 200); 
            }, 500);
            break;
    }
}


function verificarPatron(){
    if (patron.length !== patronUsuario.length) {
        return false;
    }

    return patron.every((elemento, indice) => {
        return elemento === patronUsuario[indice];
    });   
}

document.addEventListener('click', (e)=>{
    if(e.target.id == 'red'){
        patronUsuario.push('red');
        clicks++
    }
    if(e.target.id == 'yellow'){
        patronUsuario.push('yellow');
        clicks++
    }
    if(e.target.id == 'green'){
        patronUsuario.push('green');
        clicks++
    }
    if(e.target.id == 'blue'){
        patronUsuario.push('blue');
        clicks++
    }

    if(clicks == patron.length && e.target.id !== btn)
    {
        generarPatron()
    }
    
})






