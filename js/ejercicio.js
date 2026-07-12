let cantidadObras;
let consumoHora;
let costoKwh;

let cargadas = 0;

let nombres = [];
let luces = [];
let horas = [];


let btnConfigurar = document.getElementById("btnConfigurar");
let btnAgregar = document.getElementById("btnAgregar");
let btnCalcular = document.getElementById("btnCalcular");
let btnReiniciar = document.getElementById("btnReiniciar");


btnConfigurar.addEventListener("click", configurar);

btnAgregar.addEventListener("click", agregar);

btnCalcular.addEventListener("click", calcular);

btnReiniciar.addEventListener("click", reiniciar);


function configurar() {

    // Leer los datos del formulario

    cantidadObras = Number(document.getElementById("cantidadObras").value);

    consumoHora = Number(document.getElementById("consumoHora").value);

    costoKwh = Number(document.getElementById("costoKwh").value);


    // Validar

    if (cantidadObras <= 0 || consumoHora <= 0 || costoKwh <= 0) {

        alert("Completar todos los datos correctamente.");

        return;

    }


    // Deshabilitar configuración

    document.getElementById("cantidadObras").disabled = true;

    document.getElementById("consumoHora").disabled = true;

    document.getElementById("costoKwh").disabled = true;

    btnConfigurar.disabled = true;


    // Habilitar carga de obras

    document.getElementById("nombreObra").disabled = false;

    document.getElementById("cantidadLuces").disabled = false;

    document.getElementById("horas").disabled = false;

    btnAgregar.disabled = false;

}

function agregar() {

    // Leer los datos

    let nombre = document.getElementById("nombreObra").value;

    let cantidadLuces = Number(document.getElementById("cantidadLuces").value);

    let cantidadHoras = Number(document.getElementById("horas").value);


    // Validar

    if (nombre == "" || cantidadLuces <= 0 || cantidadHoras <= 0) {

        alert("Completar todos los datos de la obra.");

        return;

    }


    // Guardar en los arrays

    nombres.push(nombre);

    luces.push(cantidadLuces);

    horas.push(cantidadHoras);


    // Contador

    cargadas++;

    document.getElementById("contador").textContent =
        "Obras cargadas: " + cargadas + " de " + cantidadObras;


    // Limpiar formulario

    document.getElementById("nombreObra").value = "";

    document.getElementById("cantidadLuces").value = "";

    document.getElementById("horas").value = "";


    // Si terminó la carga

    if (cargadas == cantidadObras) {

        document.getElementById("nombreObra").disabled = true;

        document.getElementById("cantidadLuces").disabled = true;

        document.getElementById("horas").disabled = true;

        btnAgregar.disabled = true;

        btnCalcular.disabled = false;

    }

}

function calcular() {

    let consumoTotal = 0;

    let mayorTiempo = 0;

    let nombreMayor = "";

    let costoMayor = 0;

    let contadorLuces = 0;


    // Recorrer todas las obras

    for (let i = 0; i < cantidadObras; i++) {

        // Consumo de la obra

        let consumoObra = luces[i] * horas[i] * consumoHora;

        consumoTotal = consumoTotal + consumoObra;


        // Obra con mayor tiempo

        if (horas[i] > mayorTiempo) {

            mayorTiempo = horas[i];

            nombreMayor = nombres[i];

            costoMayor = consumoObra * costoKwh;

        }


        // Obras con más de 20 luces

        if (luces[i] > 20) {

            contadorLuces++;

        }

    }


    // Promedio

    let promedio = consumoTotal / cantidadObras;


    // Porcentaje

    let porcentaje = (contadorLuces * 100) / cantidadObras;


    // Mostrar resultados

    document.getElementById("resultado1").textContent =
        "Consumo diario total: " + consumoTotal.toFixed(2) + " kWh";

    document.getElementById("resultado2").textContent =
        "Consumo promedio por obra: " + promedio.toFixed(2) + " kWh";

    document.getElementById("resultado3").textContent =
        "Obra con mayor tiempo: " + nombreMayor;

    document.getElementById("resultado4").textContent =
        "Costo diario: $" + costoMayor.toFixed(2);

    document.getElementById("resultado5").textContent =
        "Obras con más de 20 luces: " + porcentaje.toFixed(2) + "%";


    // Habilitar reinicio

    btnCalcular.disabled = true;

    btnReiniciar.disabled = false;

}


function reiniciar() {

    // Vaciar los arrays

    nombres = [];
    luces = [];
    horas = [];

    // Reiniciar variables

    cargadas = 0;
    cantidadObras = 0;
    consumoHora = 0;
    costoKwh = 0;

    // Limpiar formularios

    document.getElementById("cantidadObras").value = "";
    document.getElementById("consumoHora").value = "";
    document.getElementById("costoKwh").value = "";

    document.getElementById("nombreObra").value = "";
    document.getElementById("cantidadLuces").value = "";
    document.getElementById("horas").value = "";

    // Habilitar configuración

    document.getElementById("cantidadObras").disabled = false;
    document.getElementById("consumoHora").disabled = false;
    document.getElementById("costoKwh").disabled = false;

    btnConfigurar.disabled = false;

    // Deshabilitar carga de obras

    document.getElementById("nombreObra").disabled = true;
    document.getElementById("cantidadLuces").disabled = true;
    document.getElementById("horas").disabled = true;

    btnAgregar.disabled = true;

    // Botones

    btnCalcular.disabled = true;
    btnReiniciar.disabled = true;

    // Reiniciar contador

    document.getElementById("contador").textContent =
        "Obras cargadas: 0";

    // Limpiar resultados

    document.getElementById("resultado1").textContent =
        "Consumo diario total:";

    document.getElementById("resultado2").textContent =
        "Consumo promedio por obra:";

    document.getElementById("resultado3").textContent =
        "Obra con mayor tiempo:";

    document.getElementById("resultado4").textContent =
        "Costo diario:";

    document.getElementById("resultado5").textContent =
        "Porcentaje con más de 20 luces:";

}