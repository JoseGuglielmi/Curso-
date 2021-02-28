function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 18)
	{
		alert("es menor de edad");
	}else 
	{
		if (edad > 17)
		{
			alert("es mayor de edad");
		}
	}	
}//FIN DE LA FUNCIÓN