    // /*CLASE 13: INTRODUCCION JS */

    // hola mundo desde archivo externo
    // console.log("hola mundo")

    // variables
    // var nombre = "Julian Alvarez";
    // console.log(nombre)

    // let nombreLet = "Leo Messi"; //string
    // console.log(nombreLet)

    // let edad = 30; //numerica

    // const PI = 3.14;
    // let tenerMascotas = true; //boleana

    // console.log(edad, PI, tenerMascotas)

    // edad = 20;
    // console.log(edad, PI, tenerMascotas)

    // OPERACIONES BASICAS
    // let numeroA = 1
    // let numeroB = 4

    // let resultadoSuma = numeroA + numeroB
    // console.log (resultadoSuma)

    // let nombre = "Mauricio"
    // let apellido = "Bonafine"

    // const ESPACIO = " "
    // let nombreCompleto = nombre + ESPACIO + apellido
    // console.log (nombreCompleto)

//prompt
// let entrada = prompt("ingrese su nombre");
// let salido = " hola " + entrada;
// alert(salido);

// let numeroEntrada = parseInt(prompt("ingrese su número"));
// const numeroConst = 30;
// let numeroSalida = numeroEntrada + numeroConst;
// alert(numeroSalida);

//arrays
//unidimensional
let numeros = [1, 2, 3, 5, 8];
let colores = ["rojo", "amarillo", "azul"];

console.log (numeros[1])
console.log (colores[0])

//tridimensional
let colorMascotas = [
    ['gato', 'naranja', 'blanco', 'negro'],
    ['perro', 'beagle', 'golden'],
    ['jirafa', 'amarilla'],
    ['pez', 'dorado'],
]
console.log(colorMascotas[1][1])
console.log(colorMascotas[0][1].length)

//Objeto utilizado como array asociativo

let persona= {
    nombre: "Juan",
    edad: 32,
    profesión: "Desarrollador"
};

console.log(persona["nombre"]);
console.log(persona.edad);

let empleados= [
    {nombre: "Mauricio", edad: 21, profesión: "actor" },
    {nombre: "Lorenzo", edad: 21, profesión: "salchicha" },
    {nombre: "Esteban", edad: 97, profesión: "barrigologo" },
];
console.log(empleados[2].nombre)