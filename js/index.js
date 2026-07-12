
// ARRAY CON DATOS CURIOSOS //


let datosCuriosos = [
    "Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos..",
    "Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",
    "En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",
    "Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",
    "Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",
    "Ha expuesto sus obras en más de 70 países alrededor del mundo.",
    "Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",
    "Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",
    "Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",
    "Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia."
];

// CAPTURAR ELEMENTOS DEL HTML //

let boton = document.getElementById("btnDato");
let texto = document.getElementById("datoCurioso");

// EVENTO //

boton.addEventListener("click", mostrarDato);

// FUNCION // 

function mostrarDato() {
    let numeroAleatorio = Math.floor(Math.random() * datosCuriosos.length);
    texto.textContent = datosCuriosos[numeroAleatorio];
}