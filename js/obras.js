// ARRAY CON DATOS DE LAS OBRAS //

let nombres = [
    "Pulse Room",
    "Body Movies",
    "Vectorial Elevation",
    "33 Questions per Minute",
    "Zoom Pavilion"
];

let anios = [
    2006,
    2001,
    1999,
    2000,
    2015
];

// ARRAY CON LAS IMAGENES //
let imagenes = [
    "img/pulse-room.jpg",
    "img/body-movies.jpg",
    "img/vectorial-elevation.jpg",
    "img/33-questions.jpg",
    "img/zoom-pavilion.jpg"
];

// CAPTURAR ELEMENTOS DEL HTML //
let galeria = document.getElementById("galeria");


// GENERACION AUTOMATICA DE LA GALERIA //
for (let i = 0; i < nombres.length; i++) {

    galeria.innerHTML += `

        <article class="obra">

            <h3>${nombres[i]}</h3>

            <img src="${imagenes[i]}" alt="${nombres[i]}">

            <p>Año: ${anios[i]}</p>

        </article>

    `;

}

// EVENTO PARA CAMBIAR EL DISEÑO DE LA GALERIA //
let boton = document.getElementById("btnTamano");

boton.addEventListener("click", cambiarDisenio);

// FUNCION PARA CAMBIAR EL TAMAÑO DE LA GALERIA //
function cambiarDisenio() {

    galeria.classList.toggle("galeriaGrande");

}