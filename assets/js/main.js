/*Javascript ES6, today is the day....*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.

/*
1) Const y Let (Block Scope)
2) Arrow Functions
3) Modules (Imports and Exports)
4) Template Literals
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters
7) The Spread Operator
8) Destructuring
9) Rest Operator
10) map(), filter(), reduce() 
11) Promesas, Async/Await
*/

//1) Const y Let (Block Scope) - Declarar variables (el viejo var)

var myVariable = 5;
if (true) {
  var myVariable = 10;
}
console.log('El valor es de myVariable es', myVariable);

let myVariable2 = 5;
if (true) {
  let myVariable2 = 10;
  console.log('El valor es de myVariable 2 es', myVariable2);
  let myVariable10 = 4;
}
console.log('El valor es de myVariable 2 es', myVariable2);

let sumatoria = 0;
for (let index = 0; index < 10; index++) {
  const element = index;
  sumatoria += element;
}
console.log('la sumatoria es', sumatoria);

//2) Arrow Functions
//Old School
function nombreFun(nombre) {
  return nombre;
}
nombreFun('robert');
console.log(nombreFun('robert'));

//New ES6
const nombreFuncArrow = (nombre) => {
  return nombre;
};
console.log(nombreFuncArrow('Mike'));

const nombreFuncArrowMejorada = (nombre) => nombre;
console.log(nombreFuncArrowMejorada('Susan'));

const funcSum = (a, b) => a + b;
console.log('la suma es', funcSum(40, 100));
const funcSumCondicional = (a, b) => {
  if (a > 100) {
    return a + b;
  }
  return a + b + b;
};

// 3) Modules (Imports and Exports) import / export

import actores, {
  peliculasCopadas,
  cantidadPeliculas,
} from './libreriaAmiga.js';
import colors from './colors.js';

console.log(peliculasCopadas, cantidadPeliculas(peliculasCopadas));
console.log('Actores', actores);
console.log('Colores', colors);

// 4) Template Literals

const nombreAnimal = 'Conejo';
const aniosDeVida = 8;
const casaAnimal = 'madriguera';
const clase = 'highligh';

const mensaje = 'El ' + nombreAnimal + ' esta en su ' + casaAnimal + '.';
const mensajeBonito = `El ${nombreAnimal} esta en su ${casaAnimal}. Y le quedan ${
  2022 - aniosDeVida
} años de vida`;

const paragraph = `<p class="${clase}">Hola como estas</p>`;

const content = document.querySelector('#content');
content.innerHTML = paragraph;
console.log(mensajeBonito);
console.log(paragraph);

const listado = document.querySelector('.pelis');

peliculasCopadas.forEach((pelicula) => {
  const peli = `<h2>${pelicula.nombre}</h2><p>${pelicula.origen} - <span>${pelicula.anio}</span></p>`;
  const li = `<li>${peli}</li>`;
  listado.innerHTML += li;
});

// 5) Classes (Constructor, Super, Setters and Getters)

/*
Atributos de una persona:
- altura
- DNI
- Color de pelo
- Nacionalidad
- Nombre
- Apellido

Metodos de una persona
- get Nombre Completo
- getDNI
- set Hablar
- set Saltar
- setDNI
- set irADormir

*/

class Persona {

  constructor(nombre, apellido, altura, nacionalidad, tragosComprados, guita) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    this.nacionalidad = nacionalidad;
    this.colorPelo = '';
    this.tragosComprados = tragosComprados;
  }

  //getters
  getNombreCompleto() {
    return `${this.nombre || ''} ${this.apellido || ''}`;
  }
  getAltura() {
    return this.altura || '';
  }
  getNacionalidad() {
    return this.nacionalidad || '';
  }
  getColorPelo() {
    return this.colorPelo || '';
  }

  getDatosPersona(){
      return `${this.getAltura()} ${this.getNombreCompleto()} ${this.getNacionalidad()}`
  }
  getTragosComprados(){
      return this.tragosComprados || [];
  }

  //setters
  setColorPelo(color) {
    this.colorPelo = color;
  }

  setNombre(nombre){
      this.nombre = nombre;
  }
  setTragosComprados(tragoComprado){
      this.tragosComprados.push(tragoComprado);
  }
}

const alumnoEjemplar = new Persona('German', 'Figueroa', 1.70, 'Argentino');
const viejoAmigo = new Persona('Facu', 'Colantonio', 1.75, 'Argentino');

console.log(alumnoEjemplar.getNombreCompleto(), alumnoEjemplar.getAltura(), alumnoEjemplar.getColorPelo())
// console.log(viejoAmigo.getNombreCompleto(), viejoAmigo.getAltura())

alumnoEjemplar.setColorPelo('Oscuro')

console.log(alumnoEjemplar.getNombreCompleto(), alumnoEjemplar.getAltura(), alumnoEjemplar.getColorPelo())

console.log(alumnoEjemplar.getDatosPersona())

class Ciudadano extends Persona{
    constructor(dni){
        super();
        this.DNI = dni
    }
}

const ciudadanoEjemplar = new Ciudadano('314443343')
ciudadanoEjemplar.setColorPelo('Rojo')
ciudadanoEjemplar.setNombre('Mike')
ciudadanoEjemplar.getDatosPersona()
console.log(ciudadanoEjemplar.getDatosPersona())


//6) Default Parameters

const getAlumno = (nombre = 'N/A', apellido = 'Sin mencionar', edad = 15) => {
    return `El nombre del alumno es ${nombre !== 'N/A' ? nombre : 'No mencionado'} su apellido es ${apellido} y su edad es ${edad}`
}

getAlumno('Nombre')
console.log(getAlumno())

// Crear una class Brebajes (Tragos) de una barra copada (Javascript Classes ES6)
// Se va a necesitar metodos para setear los atributos principales y obtener sus datos. A su vez diferentes funciones como pagar, tomar, comprar, etc.
// Lo importante es que una persona pueda comprar un trago y realizar las diferentes acciones que se requieren.

class Barra{
    constructor(tragos, caja) {
        this.tragos = tragos;
        this.caja = caja;
    }

    getTragos() {
        return this.tragos || [];
    }

    setTragos(trago){
        this.tragos.push(trago);
    }
}

class Brebajes {

    constructor(nombre, hielo, tipoVaso,ingredientes, precio) {
      this.nombre = nombre;
      this.tipoVaso = tipoVaso;
      this.hielo = hielo;
      this.ingredientes = ingredientes;
      this.precio = precio;
    }
  
    //getters
    getNombre() {
      return this.nombre || '';
    }
    getTipoVaso(){
        return this.tipoVaso || '';
    }
    getHielo() {
      return this.hielo || false;
    }
    getIngredientes() {
      return this.ingredientes || [];
    }
    getPrecio(){
        return this.precio || '';
    }
  
    //setters
    setNombre(nombre){
        this.nombre = nombre;
    }
    setTipoVaso(tipoVaso){
        this.tipoVaso = tipoVaso;
    }
    setHielo(hielo) {
        this.hielo = hielo;
    }
    setIngredientes(ingredientes){
        this.ingredientes = ingredientes;
    }
    setPrecio(precio){
        this.precio = precio;
    }

  }

  class Trago{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
      }

    getNombre() {
        return this.nombre || '';
    }

    getPrecio(){
        return this.precio || '';
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setPrecio(precio){
        this.precio = precio;
    }
  }


let fernet = new Trago('fernet', '600');

let ger = new Persona('ger', '', '', '');

