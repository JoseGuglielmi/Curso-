/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let sumaPocitivos=0;
	let multiplicacionNegetivos=-1;
	let respuesta="s";

	while(respuesta=="s")
	{
		numero=parseInt(prompt("Ingrese un numero"));

		if(numero>=0)
		{
			sumaPocitivos=sumaPocitivos+numero;
		}else
		{
			if(numero<=0)
			{
				multiplicacionNegetivos=multiplicacionNegetivos*numero;
			}
		}
		if(respuesta=="s")
		{
			respuesta=prompt("desea seguir ingresando numeros?").toLowerCase();
		}
	}
	if(multiplicacionNegetivos==-1)
	{
		multiplicacionNegetivos=0;
	}

	document.getElementById("txtIdSuma").value=sumaPocitivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegetivos; 
	

}//FIN DE LA FUNCIÓN