function mostrar()
{
	let numero;
	let sumaDeNumeros=0;
	let promedio;
	let cantidad=0;

	while(cantidad<3)
	{
		numero = parseInt(prompt("ingrese un numero"));
		cantidad++;
		sumaDeNumeros = sumaDeNumeros+numero;
	}
	promedio=sumaDeNumeros/cantidad;
	document.getElementById("txtIdSuma").value = sumaDeNumeros;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN