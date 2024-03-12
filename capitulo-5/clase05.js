
class Persona{
    constrcutor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar = ()=>{
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }
    soyAlto = () =>{
        return this.altura >= 1.8 ? console.log('soy alto') : console.log('soy bajo')
    }
}


class Desarrollador extends Persona{
    constrcutor(nombre, apellido, altura)
    {
        super(nombre, apellido, altura)
    }

    saludar = function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    }
    

}


let p = new Persona('juan', 'perez', 1.87)
let p2 = new Persona('lolo', 'armani', 1.83)
let p3 = new Persona('enzo', 'diaz', 1.7)