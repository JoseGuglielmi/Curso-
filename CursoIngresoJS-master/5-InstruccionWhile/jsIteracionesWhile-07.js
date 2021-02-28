/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let sumaDeNumeros = 0;
	let promedio;
	let contador = 0;
	let respuesta="s";

	while(respuesta=="s")
	{
		numero = parseInt(prompt("ingrese un numero"));
		contador ++;
		sumaDeNumeros = sumaDeNumeros + numero;
	
		if(respuesta=="s")
		{
			respuesta=prompt("desea ingresar mas numeros").toLowerCase();
		}
	}

	promedio = sumaDeNumeros / contador;
	document.getElementById("txtIdSuma").value = sumaDeNumeros;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN