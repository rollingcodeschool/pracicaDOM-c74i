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