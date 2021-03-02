function mostrar()
{
	let nombre;
	let sexo;
	let temperatura;
	let edad;
	let estadoCivil;

	let flogMaxTemperatura=0;
	let nombreMaxTem;
	let maxTemperatura=0;

	let contadorMaxEdadViudos=0;
	let contadorDeHomSolteViudos=0;
	let contadorTerceraEdad=0;
	let contadorHombresSolteros=0;

	let promedioHombresSolteros=0;
	let edadHombSolteros=0;

	let	respuesta ="s";

	while(respuesta=="s")
	{
		nombre=prompt("ingrese su nombre");
		while(!(isNaN(nombre)))
		{
			nombre=prompt("error reingrese su nombre");
		}

		sexo=prompt("igrese su sexo f o m").toLowerCase();
		while(sexo!="f"&&sexo!="m"&&isNaN(sexo))
		{
			sexo=prompt("Error, Reigrese su sexo f o m").toLowerCase();
		}

		temperatura=parseInt(prompt("ingrese temperatura"));
		while(temperatura<0 || temperatura>50||isNaN(temperatura))
		{
			temperatura=parseInt(prompt("error, reingrese temperatura"));
		}
		edad= parseInt(prompt("ingrese edad"));
		while(edad<0 || isNaN(edad))
		{
			edad= parseInt(prompt("error reingrese edad"));
		}
		estadoCivil=prompt("igrese su estado civil soltero, casado o viudo").toLowerCase();
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil=prompt("error, reigrese su estado civil soltero, casado o viudo").toLowerCase();
		}
		if(respuesta=="s"){
			respuesta=prompt("desea ingresar mas datos??").toLowerCase();
		}

		if(flogMaxTemperatura==0){
			flogMaxTemperatura=1;
			nombreMaxTem=nombre;
			maxTemperatura=temperatura
		}else if(maxTemperatura<temperatura){
			maxTemperatura=temperatura;
			nombreMaxTem=nombre;
		}

		if(edad>=18 && estadoCivil=="viudo"){
			contadorMaxEdadViudos++;
		}

		if(sexo=="m" && estadoCivil=="soltero" || estadoCivil=="viudo"){
			contadorDeHomSolteViudos++;
		}

		if(edad>=60 && temperatura>=38){
			contadorTerceraEdad++;
		}
		
		if(sexo=="m"&& estadoCivil=="soltero"){
			edadHombSolteros=edadHombSolteros+edad;
			contadorHombresSolteros++;
		}
	}

	promedioHombresSolteros=edadHombSolteros*contadorHombresSolteros;

	document.write("el nombre de la persona con mas tempreatura "+nombreMaxTem+"<br>");
	document.write("viudos mayores de 18: "+contadorMaxEdadViudos+"<br>");
	document.write("cantidad de hombres solteros o viudos: "+contadorDeHomSolteViudos+"<br>");
	document.write("personas de la tercera edad con mas de 38 de temperatura: "+contadorTerceraEdad+"<br>");
	document.write("el promedio de hombres solteros es de "+promedioHombresSolteros+"<br>")
}
