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
    console.log('desde la funcion ver mas')
    //opcion 1
    //1- crear un parrafo nuevo
    const parrafoNuevo = document.createElement('p'); // <p></p>
    console.log(parrafoNuevo)
    //2- agregar el texto y clases
    parrafoNuevo.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo consequuntur, ipsa modi obcaecati autem et numquam minima distinctio ex repellat excepturi molestias ea esse voluptate tempore molestiae animi neque. Animi?`;
    parrafoNuevo.className = 'lead'
// 3- agregar el nuevo parrafo al DOM
    const seccionInformacionExtra = document.getElementsByClassName('my-5');
    console.log(seccionInformacionExtra[1]);
    seccionInformacionExtra[1].appendChild(parrafoNuevo)
}

//buscar el boton vermas
const btnVerMas = document.getElementById('btnVerMas');

//agregar el evento click
btnVerMas.addEventListener('click', verMas);