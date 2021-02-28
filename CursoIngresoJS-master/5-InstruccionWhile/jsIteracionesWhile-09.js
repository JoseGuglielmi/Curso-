/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	
	let banderaMaximo=1;
	let banderaMinimo=1;

	let respuesta="s";

	while(respuesta=="s")
	{
		numero=parseInt(prompt("Ingrese un numero"));

		if(banderaMaximo=1)
		{
			numeroMaximo=numero;
			banderaMaximo=0;
		}
		if(banderaMinimo==1)
		{
			numeroMinimo=numero;
			banderaMinimo=2;
		}


		if(numeroMaximo<numero)
		{
			numeroMaximo=numero;
		}else
		{
			if(numeroMinimo>numero)
			{
				numeroMinimo=numero;
			}
		}

		if(respuesta=="s")
		{
			respuesta=prompt("desea seguir ingresando numeros?").toLowerCase();
		}
		
	
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN