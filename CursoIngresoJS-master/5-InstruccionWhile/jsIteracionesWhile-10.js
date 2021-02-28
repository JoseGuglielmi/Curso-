
function mostrar()
{
	let numero;
	let sumaPositivos=0;
	let sumaNegativos=0;

	let contadorPositivos=0;
	let contadorNegativos=0;
	let contadorDeCeros=0;
	let contadorDeNumerosPares=0;

	let promedioNumerosPositivos=0;
	let promedioNumerosNegativos=0;

	let diferenciaPositivosNegativos=0;

	let respuesta="s";

	while(respuesta=="s")
	{
		numero=parseInt(prompt("Ingrese un numero"));

		if(numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
			contadorPositivos++;
		}else
		{
			if(numero<0)
			{
				sumaNegativos=sumaNegativos+numero;
				contadorNegativos++;
			}
		}	
		if(numero==0)
		{
			contadorDeCeros++;
		}	
		if(numero % 2 == 0)
		{
			contadorDeNumerosPares++;
		}

		if(respuesta=="s")
		{
			respuesta=prompt("desea seguir ingresando numeros?").toLowerCase();
		}
	}

	promedioNumerosPositivos=sumaPositivos/contadorPositivos;
	promedioNumerosNegativos=sumaNegativos/contadorNegativos;

	diferenciaPositivosNegativos=sumaPositivos-sumaNegativos;

	document.write("la suma total de positicos son "+sumaPositivos+"<br>");
	document.write("la suma de los negativos son "+sumaNegativos+"<br>");
	document.write("la cantidad de numeros positivos son de "+contadorPositivos+"<br>");
	document.write("la cantidad de numeros negativos son de "+contadorNegativos+"<br>");
	document.write("la cantidad de ceros es de "+contadorDeCeros+"<br>");
	document.write("la cantidad de numeros pares son "+contadorDeNumerosPares+"<br>");
	document.write("promedio de numeros positivos "+promedioNumerosPositivos+"<br>");
	document.write("promedio de numeros negativos "+promedioNumerosNegativos+"<br>");
	document.write("la diferencia entre numeros positivos y negativos es de "+diferenciaPositivosNegativos+"<br>");
}//FIN DE LA FUNCIÓN