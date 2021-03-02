function mostrar()
{
	//declaro variables
  let tipo;
  let precioBolsa;
  let descuento=0;
  let precioTotal;

  let precioTotalConDescuento;

  let respuesta="s";

  let cantidadDeBolsas = 0;

  let flogTipoMasBolsas=1;
  let tipoMasBolsa;
  let tipoMasCantidadBolsas;

  let flogTipoMasCaro=1;
  let tipoMasCaro;
  let tipoPrecioMasCaro;
	//termino de declarar variables

	//pido todos lo datos y los valido
	while(respuesta=="s")
	{
		tipo = prompt("ingrese producto: arena / cal / camento ");

		while(tipo != "arena" && tipo != "cal" && tipo != "cemento") 
		{
			tipo = prompt("Error Reingrese producto: arena / cal / camento  ");
		}

		precioBolsa = parseInt(prompt("ingrese precio"));

		while(precioBolsa <= 0 || isNaN(precioBolsa))
		{
			precioBolsa = parseInt(prompt("Error, Reingrese precio que sea mayor a 0"));
		}

		cantidadDeBolsas = parseInt(prompt("ingrese cantidad de bolsas"));

		while(cantidadDeBolsas <= 0 || isNaN(cantidadDeBolsas))
		{
			cantidadDeBolsas = parseInt(prompt("Error, Reingrese cantidad de bolsas que no sea mayor a 0"));
		}

		if(respuesta=="s")
		{
		respuesta=prompt("quieres ingresar mas?");
		}
		//dejo de pedir datos

		//datos para el usuario
	if(cantidadDeBolsas>=10 && cantidadDeBolsas<30)
	{
		descuento=15;
	}else if(cantidadDeBolsas>=30)
	{
		descuento=25;
	}
	
	precioTotal=cantidadDeBolsas*precioBolsa;
	precioTotalConDescuento=(precioTotal*descuento)/100;
	precioTotalConDescuento=precioTotal-precioTotalConDescuento;

	if(flogTipoMasBolsas==1){
		flogTipoMasBolsas=0;
		tipoMasBolsa=tipo;
		tipoMasCantidadBolsas=cantidadDeBolsas;
	}else if(tipoMasCantidadBolsas<cantidadDeBolsas){
		tipoMasBolsa=tipo;
		tipoMasCantidadBolsas=cantidadDeBolsas;
	}
	if(flogTipoMasCaro==1){
		flogTipoMasCaro=0;
		tipoMasCaro=tipo;
		tipoPrecioMasCaro=precioBolsa;

	}else if(tipoPrecioMasCaro<precioBolsa){
		tipoMasCaro=tipo;
		tipoPrecioMasCaro=precioBolsa;
	}
  }
  document.write("el precio sin descuento es "+precioTotal+"<br>");
  if(descuento!=0){
	document.write("el descuento es de "+ precioTotalConDescuento+"<br>");
  } 
  document.write("el tipo con mas cantidad de bolsas es "+tipoMasBolsa+" con la cantidad de "+tipoMasCantidadBolsas+"<br>");
  document.write("el tipo mas caro es "+tipoMasCaro+" con el precio de "+tipoPrecioMasCaro)
}
