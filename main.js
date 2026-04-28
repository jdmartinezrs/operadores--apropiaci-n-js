//Ejercicio 1 
/*
let nombre = prompt("por favor ingresa tu nombre");
let  edad = prompt("Ingresa tu edad");

console.log("Hola " + nombre + "tienes " +  edad + "años.");
*/

let base = prompt("Ingresa la base");
let altura = prompt("Ingresa la altura");
let area = base*altura;
console.log( "El rectangulo tiene un área de " + area)

/*
3. Promedio de tres notas
• Solicita tres calificaciones.
• Calcula y muestra el promedio.*/

let primerNota = prompt("Ingrese la primera nota ");
let segundaNota = prompt("Ingrese la segunda nota ");
let terceraNota = prompt("Ingrese la tercera nota ");

let suma = primerNota + segundaNota + terceraNota;
let promedio = suma / 3

console.log("El promedio de las notas es: " + promedio);

//Conversión de monedas • Solicita un valor en pesos colombianos. • Convierte a dólares (suponiendo 1 USD = 4000 COP).

let pesos =  parseFloat(prompt("Ingrese el valor en pesos colombianos"))

let pesosEndolares = pesos / 4000

console.log("Sus pesos equivalen a "+ pesosEndolares + "dolares")

//Conversión de temperatura • Solicita una temperatura en Celsius. • Convierte a Fahrenheit usando la fórmula: F = (C × 9/5) + 32.

let celsius = parseFloat(prompt("Ingrese la temperatura actual en Celsius " ))
let Fahrenheit = (celsius * 9/5 ) + 32

