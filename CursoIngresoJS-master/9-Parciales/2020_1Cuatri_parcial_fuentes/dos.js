function mostrar()
{
	//declaro variables
  let tipo;
  let precioBolsa;
  let descuento = 0;
  let precioFinal = 0;

  let respuesta="s";

  let cantidadDeBolsas = 0;

  let flogTipoMasUnidades;
  let tipoMasCantidadBolsas;
  let tipoMasCaro;
	//termino de declarar variables

	//pido todos lo datos y los valido
	while(respuesta=="s")
	{
		tipo = prompt("ingrese producto: arena / cal / camento ");

		while(tipo != "arena" && tipo != "cal" && tipo != "cemento") 
		{
			tipo = prompt("Error Ringrese producto: jabon / barbijo / alcohol ");
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
		//dejo de pedir datos

		//datos para el usuario
    


    if(cantidadDeBolsas >=10 && cantidadDeBolsas <= 30)
    {
      descuento = 15;
    }else if(cantidadDeBolsas >= 30)
    {
      descuento = 25;
    }

    if(respuesta=="s")
    {
      respuesta=prompt("quieres ingresar mas?");
    }
	/*if(flogTipoMasUnidades == 0)
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
	document.write("cantidad de jabon es de "+cantidadJabones);*/
  }
}
