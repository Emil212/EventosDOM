//Usos del DOM

//querySelector
const heading = document.querySelector('.header__texto h2');//Retorna 0 o 1 elementos, buena practica usar BEM

heading.textContent = 'Nuevo Heading';


//querySelectorAll

//Seleciona todos los que se pidan
//Si se quiere mandar a la consola uno en especifico se usa la misma sintaxis que los arreglos

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo texto para enlaces'
enlaces[0].classList.add('nuevaClase');


//getElementById

//Es igual a lo visto en clase 

const nuevoEnlace = document.createElement('A'); // Se recomienda usar mayusculas 

//Se tiene que hacer varias cosas


//Agregar href

nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar texto 

nuevoEnlace.textContent = 'Tienda virtual';

//Agregar clase 

nuevoEnlace.classList.add('navegacion__enlace')

//Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


//Eventos

// console.log(1);

// window.addEventListener('load',imprimir()); //window es el objeto global, con load espera a que JS y los archivos que dependen del html, imagenes, css esten listos 

// //La siguiente forma hace lo mismo que la de arriba

// window.onload = function (){
//     console.log(3);
// };


document.addEventListener('DOMContentLoaded', function(){
    console.log(4); 
}); //Solo espera a que se descargue el html, no espera css ni imagenes

//Por lo regular se usa mas DOMContentLoaded




console.log(5);

function imprimir(){
    console.log(2);
}


// window.onscroll = function(){
//     console.log('scrolling');
// }

//Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault(); //Sin esta linea la pagina se recarga al dar clic en enviar, especialmente util para formularios

//     //Validar un formulario

//     console.log('enviando formulario');
// });


//Eventos de los inputs y textarea

//Chance no es la mejor opcion para una validacion en tiempo real, lo mejor es input

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto)
    //console.log(e.target.value); //Con este codigo podemos saber que esta escribiendo el usuario

email.addEventListener('input', leerTexto);
    //console.log(e.target.value); //Con este codigo podemos saber que esta escribiendo el usuario

mensaje.addEventListener('input', leerTexto);
    //console.log(e.target.value); //Con este codigo podemos saber que esta escribiendo el usuario




//Elemento de Submit

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario

    const {nombre, email, mensaje} = datos; 

    if(nombre === '' || email === '' || mensaje === ''){
        
        mostarAlerta('Todos los campos son obligatorios', 'true'); //El segundo valor puede ser el que sea debido a que es un argumento de referencia

        return; //Corta la ejecucion del codigo, similar a break en switch
    }
 
    //Enviar formulario
    
    mostarAlerta('Datos enviados correctamente');

})

function leerTexto(e){
    // console.log(e.target.value); //De esta forma ese evita que el codigo sea redundante y repetitivo 

    datos[e.target.id] = e.target.value; //permite que los datos se almacen en un arreglo para posteriormente se muestre en consola lo que el usuario esta escibiendoe pero de manera maz ordenada
    //console.log(datos);
}



//Reestructurando codigo 

//Se asigna null a error en los parametros para que no marque error


function mostarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje; 

    if(error){
        alerta.classList.add('error');
    }

    //Se va a marcar correcto automaticamente debido a que no se tiene un segundo argumento 

    else{
        alerta.classList.add('correcto');
    }
     
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);

}


// Mostar error en pantalla 

// function mostrarError(mensaje){
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

// }



// function mostrarFinal(mensaje){
//     const correcto = document.createElement('P');
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto');
//     formulario.appendChild(correcto);

//     //Desaparezca despues de 5 segundos



// }





//Buena practica es usar submit en lugar de clic en los formularios, el clic esta asociado al boton con el que se envia pero el submit esta asociado con el formulario

//El formulario obligatoriamente debe tener un campo de tipo submit

//El evanto de clic se puede utilizar en imagenes, extos, etc, pero no en formularios 


//Para organizar el codigo:

//1.-Variables

//2.-eventListeners

//3.-Funciones 