const cambiarTitulo = () =>{
    console.log('estoy en la funcion cambiarTitulo');
    //seleccionar el h1
    // const tituloPrincipal = document.getElementsByTagName('button');
    // const tituloPrincipal = document.getElementsByClassName('btn');
    // const tituloPrincipal = document.getElementById('tituloSecundario');
    const tituloPrincipal = document.querySelector('h1');
    console.log(tituloPrincipal);
    //modificar el h1
    tituloPrincipal.innerHTML = 'Titulo desde <b>app.js</b>';
    tituloPrincipal.className = 'display-1 text-info'
}

const verMas = ()=>{
    //traigo el nodo padre
    const seccionInformacionExtra = document.getElementsByClassName('my-5');
    
    if(btnVerMas.innerHTML === 'Ver mas...'){
 //opcion 1
    //1- crear un parrafo nuevo
    const parrafoNuevo = document.createElement('p'); // <p></p>
    console.log(parrafoNuevo)
    //2- agregar el texto y clases
    parrafoNuevo.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo consequuntur, ipsa modi obcaecati autem et numquam minima distinctio ex repellat excepturi molestias ea esse voluptate tempore molestiae animi neque. Animi?`;
    parrafoNuevo.className = 'lead'
// 3- agregar el nuevo parrafo al DOM
    console.log(seccionInformacionExtra[1]);
    // seccionInformacionExtra[1].appendChild(parrafoNuevo) //agrega un nodo hijo al final
    // seccionInformacionExtra[1].prepend(parrafoNuevo) //agrega un nodo hijo al principio
    seccionInformacionExtra[1].insertBefore(parrafoNuevo,btnVerMas) //agrega un nodo hijo al principio
    console.log(seccionInformacionExtra[1].children) //agrega un nodo hijo al principio

    //opcion 2
    // seccionInformacionExtra[1].innerHTML += `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo consequuntur, ipsa modi obcaecati autem et numquam minima distinctio ex repellat excepturi molestias ea esse voluptate tempore molestiae animi neque. Animi?</p>`

    //modificar el texto del boton
    btnVerMas.innerHTML = 'Ocultar';
    btnVerMas.className = 'btn btn-outline-danger';
    }else{
        console.log('aqui deberia ocultar el parrafo');
        console.log(seccionInformacionExtra[1].children)
        seccionInformacionExtra[1].removeChild(seccionInformacionExtra[1].children[2]);
        btnVerMas.innerHTML = 'Ver mas...';
        btnVerMas.className = 'btn btn-outline-light';
    }
   
}
// Event

const obtenerDatos = (e)=>{
    e.preventDefault();
    console.log(e);
    console.log('estoy en el formulario 🎭');
    const textoInput = document.getElementById('busqueda');
    console.log(textoInput.value);
}

//buscar el boton vermas
const btnVerMas = document.getElementById('btnVerMas');
const formBuscar = document.querySelector('#formBuscar');

console.log(formBuscar);

//agregar el evento click
btnVerMas.addEventListener('click', verMas);
formBuscar.addEventListener('submit', obtenerDatos);