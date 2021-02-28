function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad > 12 && edad < 18 )
	{
		alert("es adolecente de edad");
	}

}//FIN DE LA FUNCIÓN
