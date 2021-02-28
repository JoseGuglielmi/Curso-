/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let datoId;	

	datoId=prompt("dame un dato");

	document.getElementById("txtIdNombre").value = datoId;

}

