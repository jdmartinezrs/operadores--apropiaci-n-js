/* 1. Factura de compra simple

• Solicita el nombre de un producto, su precio y la cantidad comprada.
• Calcula el total a pagar.
• Muestra: "El total a pagar por [cantidad] [producto] es: [total]".*/

let nombreProducto = prompt("Ingrese el nombre del producto")
let precioProducto = parseInt(prompt("Ingrese el precio del producto"))
let cantidadProducto = parseInt(prompt("Ingrese la cantidad comprada del producto"))

precioTotal = precioProducto * cantidadProducto

console.log(" El total a pagar por" + cantidadProducto + nombreProducto  + "es: " + precioTotal )


/** 2. Salario semanal
• Solicita el número de horas trabajadas y el valor por hora.
• Calcula el salario semanal.*/

let horas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas"))
let valorHora = parseFloat(prompt("Ingres el valor de la hora"))

let salarioSemanal = (horas * valorHora ) / 7

console.log("El valor del salario semanal esquivale a: " + salarioSemanal)

/**3. Promedio de edad en un grupo
• Solicita las edades de 4 personas.
• Calcula el promedio de edad. */

let edadPersona1 = parseInt(prompt("Ingrese la edad de la persona 1"))
let edadPersona2 = parseInt(prompt("Ingrese la edad de la persona 2"))
let edadPersona3 = parseInt(prompt("Ingrese la edad de la persona 3"))
let edadPersona4 = parseInt(prompt("Ingrese la edad de la persona 4"))
let suma = edadPersona1 + edadPersona2 +edadPersona3 +edadPersona4

let promedioGrupo = suma / 4

console.log("El promedio del grupo equivale a: "+ promedioGrupo)

/**4. Consumo de gasolina
• Solicita la cantidad de kilómetros recorridos y el consumo por kilómetro
(litros/km).
• Calcula los litros totales consumidos. */

let kilometrosRecorridos = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos "))
let consumokilometros = parseFloat(prompt("Ingrese la cantidad de consumo por kilometro"))
let consumo = kilometrosRecorridos*consumokilometros 
console.log(" los litros totales recorridos " + consumo )

/**5. Tiempo de viaje
• Solicita la distancia de un recorrido (km) y la velocidad promedio (km/h).
• Calcula el tiempo estimado del viaje en horas. */

let distanciaRecorrido = parseFloat(prompt(" Ingresa la distancia de un recorrido (km)"))
let distanciaPromedio = parseFloat(prompt(" Ingresa  la velocidad promedio (km/h)"))
let tiempoEstimado = distanciaRecorrido / distanciaPromedio 

console.log("El tiempo estimado del viaje en horas es: " + tiempoEstimado)

/**6. Conversión de minutos a horas y minutos
• Solicita un número de minutos.
• Convierte a formato: “X horas y Y minutos”. */
let numeroMinutos = parseFloat(prompt(" Ingresa el número de minutos"))
let ctdadhoras = Math.floor(numeroMinutos /60 )
let minutos = numeroMinutos % 60
console.log(" el resultado es: " + "Horas "+ ctdadhoras + "y minutos es :"  + minutos)

/**7. Cálculo de descuento simple
• Solicita el precio de un producto.
• Calcula el precio final con un 10% de descuento.
 */

let precioProductos = parseFloat(prompt(" Ingresa el precio del producto"))
let decuento = precioProductos * 0.10
let preciofinal = precioProductos - decuento
console.log("El precio del producto con 10% de descuento es: "+ preciofinal)



