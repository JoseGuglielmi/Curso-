function mostrar()
{

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad<13)
	{
		alert("Usted es un niño");
	}
	else
	{
		if(edad<18)
		{
			alert("Ustede es adolescente");
		}
		else
		{
			alert("Usted es mayor de edad");
		}
	}


}//FIN DE LA FUNCIÓN