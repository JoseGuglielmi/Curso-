
function mostrar()
{
		//declaro variables
		let tipo;
		let precio;
		let cantidad;
		let marca;
		let Fabricante;
	
		let tipoMasCaroJabones;
		let precioMasCaroJab;
		let flogMasCaroJabones=0;
		let cantidadDeJabones;
		let fabricanteJabonMax;

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
			}
			//dejo de pedir datos

			if(flogMasCaroJabones=0){
				flogMasCaroJabones=1;
				tipoMasCaroJabones=tipo;
				cantidadDeJabones=cantidad;
				precioMasCaroJab=precio;
				fabricanteJabonMax=Fabricante;
			}else if(precioMasCaroJab<precio){
				tipoMasCaroJabones=tipo;
				cantidadDeJabones=cantidad;
				precioMasCaroJab=precio;
				fabricanteJabonMax=Fabricante;
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
	
}
