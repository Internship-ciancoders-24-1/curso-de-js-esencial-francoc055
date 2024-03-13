
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
        if(fn){
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura >= 1.8 ? console.log('soy alto') : console.log('soy bajo')
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}


let p = new Desarrollador('juan', 'perez', 1.87)
let p2 = new Persona('lolo', 'armani', 1.83)
let p3 = new Persona('enzo', 'diaz', 1.7)

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log('no sabia que eras dev');
    }
}

p.saludar(responderSaludo)  