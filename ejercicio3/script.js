
/** Ejercicio 3
 * Captura el valor de los inputs del form con querySelector y
 * al hacer click en el boton se guardan los datos en un arreglo
 * y se muestra por consola el nombre completo y la edad del usuario

 * Ejemplo:
 *  Nombre: Juan  Apellido: Perez   Email: pepe@gmail.com
 *  Alert: Tu Nombre completo es: Juan Perez, y tu Email es: pepe@gmail.com
 *  usuario = ["Juan", "Perez", "pepe@gmail.com"]


 *  Pasos:
    * 1. Captura los inputs del form con querySelector
    * 2. Captura el boton con querySelector
    * 3. Agrega un evento Listener que escuche el click del boton    
    * 4. Captura el valor de los inputs y guardalos en variables
    * 5. Valida que los inputs no esten vacios y si lo estan muestra un alerta
    * 6. Si los inputs no estan vacios, guarda los valores en el arreglo usuario
    * 8. Muestra por consola el arreglo usuario
 */


//Captura los inputs y boton del form con querySelector
let nombre = document.querySelector("#nombre")
let apellido = document.querySelector("#apellido")
let email = document.querySelector("#email")
let boton = document.querySelector("#boton")

console.log(nombre)
console.log(apellido)
console.log(email)
console.log(boton)


//Agrega un evento Listener que escuche el click del boton
function procesarUsuario (e) {
   e.preventDefault() //previene el comportamiento por defecto del formulario
   let usuario = []
   let nombreValor = nombre.value //captura el valor del input
   let apellidoValor = apellido.value 
   let emailValor = email.value 

   if ((nombreValor === "") || (apellidoValor === "") || (emailValor === "")) { //valida que los inputs no esten vacios
   alert ("Por favor ingresa todos los campos :3") //muestra un mensaje al hacer click en el boton
   }
   else {
      usuario.push(nombreValor, apellidoValor, emailValor) //guarda los valores en el arreglo usuario si los inputs no estan vacios
      console.log("Arreglo de Usuario: ", usuario) //muestra por consola el arreglo usuario
      alert ("Nombre Completo: " + nombreValor + " " + apellidoValor + " y el Email: " + emailValor + " :)") //muestra un mensaje con el nombre completo y el email
   }

}

boton.addEventListener("click", procesarUsuario)

