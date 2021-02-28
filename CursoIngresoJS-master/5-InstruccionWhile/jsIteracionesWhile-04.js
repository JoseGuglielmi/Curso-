/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
    let numeroValido = parseInt(prompt("dame un numero del 0 al 9"));

    while (numeroValido < 0 && numeroValido > 9 || isNaN(numeroValido)) {
        numeroValido = parseInt(prompt("incorrecto, dame un numero del o al 9"));
    }
    document.getElementById("txtIdNumero").value = numeroValido;
} //FIN DE LA FUNCIÓN