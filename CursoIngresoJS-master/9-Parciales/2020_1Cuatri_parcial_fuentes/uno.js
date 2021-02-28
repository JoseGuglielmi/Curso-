
function mostrar()
{
	//declaro variables
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let Fabricante;

	let cantidadBarbijos=0;
	let contadorBarbijos=0;

	let contadorJabones=0;
	let cantidadJabones = 0;

	let precioAlcoholesMinimo = 0;	
	let marcaMinim;
	let fabricanteMin = "Sin datos";
	let cantidadAlcoholes = 0;
	let cantidadAlcoholesMin = 0; 
	let contadorAlcohol=0;
	let flogAlcohol = 1;

	let flogTipoMasUnidades = 0;
	let tipoMasUnidades;
	let cantidadMasUnidades=0;
	let promedioDeCompra = 0;	
	//termino de declarar variables

	//pido todos lo datos y los valido
	for(i=0; i < 3; i++)
	{
		tipo = prompt("ingrese producto: jabon / barbijo / alcohol ");

		while(tipo != "jabon" && tipo != "barbijo" && tipo != "alcohol") 
		{
			tipo = prompt("Error Ringrese producto: jabon / barbijo / alcohol ");
		}

		precio = parseInt(prompt("ingrese precio, entre 100 y 300"));

		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = parseInt(prompt("Error, Reingrese precio, entre 100 y 300"));
		}

		cantidad = parseInt(prompt("ingrese cantidad que no sea mayor a 1000"));

		while(cantidad <= 0 || cantidad > 1000 || isNaN(cantidad) )
		{
			cantidad = parseInt(prompt("Error, Reingrese cantidad que no sea mayor a 1000"));
		}

		marca = prompt("ingrese marca");

		Fabricante = prompt("ingrese fabricante");
		//dejo de pedir datos

		//datos para el usuario
		if(tipo=="alcohol")
		{
			if(flogAlcohol == 1)
			{
				flogAlcohol = 0;
				precioAlcoholesMinimo = precio;
				marcaMinim = marca;
				fabricanteMin = Fabricante;
				cantidadAlcoholesMin = cantidad;
			}else
			{
				if(precio < precioAlcoholesMinimo)
				{
					precioAlcoholesMinimo = precio;
					marcaMinim = marca;
					fabricanteMin = Fabricante;
					cantidadAlcoholesMin = cantidad;
				}
			}

			cantidadAlcoholes = cantidad;
			contadorAlcohol ++;

		}else if(tipo == "barbijo") {
			cantidadBarbijos = cantidad;
			contadorBarbijos ++;

		}else if(tipo = "jabon"){
			cantidadJabones = cantidad;
			contadorJabones ++;
		}
		if(flogTipoMasUnidades == 0)
		{
			flogTipoMasUnidades =1;
			tipoMasUnidades = tipo;
			cantidadMasUnidades = cantidad;

		}else if(cantidadMasUnidades < cantidad)
		{
			tipoMasUnidades = tipo;
			cantidadMasUnidades = cantidad;
		}
	}

	if(cantidadAlcoholes >= cantidadBarbijos && cantidadAlcoholes > cantidadJabones)
	{
		promedioDeCompra = cantidadAlcoholes / contadorAlcohol;
	}else if(cantidadBarbijos > cantidadAlcoholes && cantidadBarbijos > cantidadJabones)
	{	
		promedioDeCompra = cantidadBarbijos / contadorBarbijos;
	}else {
		promedioDeCompra = cantidadJabones / contadorJabones;
	}

	document.write("alchol con el precio mas bajo "+precioAlcoholesMinimo+"<br>");
	document.write("cantidad de alcoholes "+cantidadAlcoholesMin+"<br>");
	document.write("fabricante de alcoholes "+fabricanteMin+"<br>");
	document.write("tipo con mas unidades es "+tipoMasUnidades+" con la cantidad de "+cantidadMasUnidades+" y el promedio de compra es "+promedioDeCompra+"<br>");
	document.write("cantidad de jabon es de "+cantidadJabones);
}


/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

el tipo (validar "barbijo" , "jabón" o "alcohol")

el precio (validar entre 100 y 300),

la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),

la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

b) Del tipo con mas unidades, el promedio por compra

c) Cuántas unidades de jabones hay en total*/