
/**
 * Ejercicio 5. Agregar y Eliminar Elementos al DOM
 *  
 * 1. Seleccionar los elementos: contenedor y boton con los que se va a trabajar
 * 2. Crear un nuevo elemento parafo con createElement en el documento
 * 3. Agregar el texto al nuevo parafo creado
 * 4. Adicionar el elemento creado al contenedor selecccioando con appendChild
 * 5. El codigo anterior incluirlo en una nueva funcion crearParafo()
 * 6. Adicionar al boton un escuchador para el evento click que  llame la funcion
 *    crear_parrafo()
 * 
 */

// 1. Seleccionar los elementos: contenedor y boton con los que se va a trabajar

const contenedor = document.querySelector("#contenedor")
const botonAgregar = document.querySelector("#botonAgregar")
const botonEliminar = document.querySelector("#botonEliminar")   

console.log(contenedor, botonAgregar, botonEliminar) //verificar

// 2. Crear un nuevo elemento parafo con createElement en el documento

let nuevoParrafo = document.createElement("p")

// 3. Agregar el texto al nuevo parafo creado

nuevoParrafo.innerText = "Este es un nuevo parrafo uwu"

// 4. Adicionar el elemento creado al contenedor seleccionado con appendChild

contenedor.appendChild(nuevoParrafo)

//5. El codigo anterior incluirlo en una nueva funcion crearParafo()

function crearParrafo() {
    let nuevoParrafo = document.createElement("p")
    nuevoParrafo.innerText = "Este es un nuevo parrafo uwu"
    contenedor.appendChild(nuevoParrafo)
}

// 6. Adicionar al boton un escuchador para el evento click que  llame la funcion

botonAgregar.addEventListener("click", crearParrafo)


// ELIMINAR PARRAFO

botonEliminar.addEventListener("click", function() {
    let elementos = document.querySelector("p")

    if (!elementos) {
        alert("Ya no hay elementos :(")
        return
    }

    elementos.remove()
})
