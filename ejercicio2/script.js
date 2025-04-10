
// Ejercicio2: Cambiar los Atributos de los elementos del DOM

// 2.1 Seleccionar elemento del DOM
/** 
 * 1. Seleccionar el elemento h1 con querySelector
 * 2. Cambiar el titulo por "Hola Mundo"
 * 3. Ver el efecto en el navegador
 */

let titulo = document.querySelector('#titulo')
titulo.innerHTML = "Hola Mundo uwu"


// 2.2 Cambiar el atributo src de la imagen
/**
 * 1. Seleccionar la imagen con querySelector
 * 2. Cambiar su atributo src por "imagen/carita.png"
 * 3. Ver el efecto en el navegador
 */

let imagen = document.querySelector('img')
imagen.src = "imagen/carita.png"

// 2.3 Cambiar la clase del div
/**
 * 1. Seleccionar el div main-div con querySelector
 * 2. Cambiar su clase por "new-div"
 * 3. Ver el efecto en el navegador
 */

let mainDiv = document.querySelector('.main-div')
mainDiv.className = "new-div"


// 2.4 Cambiar el atributo href del enlace
/**
 * 1. Seleccionar el enlace con querySelector usando su id
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de su atributo href por consola con getAttribute
 * 2. Cambiar su atributo href por "https://www.icesi.edu.co"
 * 3. Cambiar su texto por "Universidad Icesi"
 * 4. Cambiar su atributo target por "_blank"
 * 5. Cambiar su clase por "boton"
 * 6. Ver el efecto en el navegador
 * 7. Eliminar la clase del enlace
 * 8. Ver el efecto en el navegador
 */

let enlace = document.querySelector('#enlace')
console.log(enlace)
console.log(enlace.getAttribute('href'))
enlace.setAttribute("href","https://www.icesi.edu.co") //primero va el src y luego el link o img
enlace.innerHTML = "Universidad Icesi" //cambiamos el nombre del enlace
enlace.setAttribute("target","_blank") //para que salga en otra ventana
enlace.setAttribute("class","boton") //cambiamos la clase del enlace, agregamos el estilo al enlace
enlace.removeAttribute("class") //eliminamos la clase del enlace quitamos el estilo del enlace


// 2.5 Cambiar el estilo del div
/**
 * 1. Seleccionar el div con querySelector
 * 2. Cambiar su estilo por:
 *    - background-color: green
 *    - color: white
 *    - font-size: 30px
 *    - font-family: Arial
 *    - text-align: center
 *    - padding: 20px
 *    - border-radius: 10px
 * 3. Ver el efecto en el navegador
 */

let mainDiv2 = document.querySelector ('.new-div') //ponemos new-div ya que anteriormente le cambiamos el nombre a la clase

mainDiv2.classList.add("nuevo-estilo") //

mainDiv2.style.backgroundColor = "purple"
mainDiv2.style.color = "white"
mainDiv2.style.fontSize = "30px"
mainDiv2.style.fontFamily = "Arial"
mainDiv2.style.textAlign = "center"
mainDiv2.style.padding = "20px"
mainDiv2.style.borderRadius = "10px"

