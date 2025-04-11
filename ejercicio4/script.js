
/**
 * Ejercicio 4. Jerarquia Elementos al DOM
 * ---------------------------------------
 * 1. Capturar los elementos: contenedor, parrafo1 y parrafo2 con queryselector
 * 2. Ir al nodo padre del parrafo1 y mostrar su etiqueta con tagName
 * 3. Mostrar los hijos que tiene el elemento contenedor
 * 3. Mostrar cuantos hijos tiene el elemento contenedor
 * 4. Mostrar el primer hijo de el contenedor con []
 * 5. Mostrar el Primer y último hijo con firstElementChild y lastElementChild
 * 6. Mostrar el texto del siguiente hermano de parrafo1 nextElementSibling
 * 7. Mostrar el id del anterior hermano de parrafo2 previousElementSibling
 * 8. Recorrer la lista de frutas (Nodos hijos) con ayuda del DOM 
 */

  // 1. Capturar los  elementos 
let contenedor = document.querySelector("#contenedor")
let parrafo1 = document.querySelector("#parrafo1")  
let parrafo2 = document.querySelector("#parrafo2")

// 2. Ir al nodo padre del parrafo1 y mostrar su etiqueta con tagName
console.log(parrafo1.parentNode.tagName) 

//Mostrar los hijos que tiene el elemento contenedor
console.log(contenedor.children[1], contenedor.children[2])

// 3. Mostrar cuantos hijos tiene el elemento contenedor 
// 4. Mostrar el Primer y último hijo con firstElementChild y lastElementChild
console.log(contenedor.firstElementChild) // 1er hijo
console.log(contenedor.lastElementChild) // último hijo

// 6.  Mostrar el texto del siguiente hermano de parrafo1 nextElementSibling
console.log("hemanos")
console.log(parrafo1.nextElementSibling)
console.log(parrafo2.previousElementSibling) // 7. Mostrar el id del anterior hermano de parrafo2 previousElementSibling

// 8. Recorrer la lista de frutas (Nodos hijos) con ayuda del DOM
let listaFrutas = document.querySelector("#frutas") //capturar frutas
console.log(frutas)

let hijos = frutas.children //capturar hijos de frutas
console.log(hijos)

for (const elemento of hijos) { //recorrer la lista de frutas 
    console.log(elemento.textContent) //imprimir cada hijo
}

