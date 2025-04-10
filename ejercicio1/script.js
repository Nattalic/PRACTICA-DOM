
//  Ejercicio 1 - Seleccionar elementos del DOM

/** 1.1. Selecionar x id
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 */

//ID
let titulo = document.getElementById('titulo') //buscar ID titulo

titulo.innerText = "Hola Mundo!!!!!!!!!!!" //cambiar el texto del elemento sin entrar al html

console.log(titulo) //mostrar en consola el elemento


/** 1.2. Seleccionar x clase
 * 1. Seleccionar el div por su clase main-div 
 * 2. Mostrar su contenido en consola
 * 3. Mostrar su contenido en consola con innerHTML
 * 4. Mostrar su contenido en consola con innerText
 */


//CLASE
/*
const miDiv = document.getElementsByClassName('main-div') //buscar clase main-div
console.log(miDiv) //mostrar en consola el elemento
*/

const miDiv = document.querySelector('.main-div') //buscar clase main-div
console.log(miDiv.innerHTML) //todo lo que hay en el html
console.log(miDiv.innerText) //solo muestra el texto que encontro
console.log(miDiv) //mostrar en consola el elemento




// 1.3. Por etiqueta
/**
 * 1. Seleccionar el elemento por su etiqueta "img"
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de los atributos src y alt por consola
 */

//ETIQUETA
let img = document.getElementsByTagName('img') //buscar etiqueta img o p
console.log(img) 


// 1.4. Por querySelector
/**
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 * 3. Seleccionar el div por su clase main-div 
 * 4. Mostrar su contenido en consola
 * 5. Seleccionar el elemento por su etiqueta "img"
 * 6. Mostrar su contenido en consola
 * 7. Mostrar el contenido de los atributos src y alt por consola
 */


// QUERY SELECTOR
let tituloID = document.querySelector('#titulo') //buscar ID titulo
console.log(tituloID) //mostrar en consola el elemento

let mainDivclass = document.querySelector('.main-div') //buscar clase main-div
console.log(mainDivclass) //mostrar en consola el elemento

let imgEtiqueta = document.querySelector('img') //buscar etiqueta img 
console.log(imgEtiqueta) //mostrar en consola el elemento

console.log(imgEtiqueta.src) // atributo src //ruta de la imagen
console.log(imgEtiqueta.alt) // atributo alt 