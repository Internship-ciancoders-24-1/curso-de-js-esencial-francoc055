function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = ()=>{
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = () =>{
    return this.altura >= 1.8 ? console.log('soy alto') : console.log('soy bajo')
}

let p = new Persona('juan', 'perez', 1.87)
let p2 = new Persona('lolo', 'armani', 1.83)
let p3 = new Persona('enzo', 'diaz', 1.7)