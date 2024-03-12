function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

let p = new Persona('juan', 'perez')


console.log(p);