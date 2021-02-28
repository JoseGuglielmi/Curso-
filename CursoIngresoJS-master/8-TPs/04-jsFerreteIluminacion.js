/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let lampara;
    let cantidadDeLamparas;
    let marcaLamparitas;
    let descuento;
    let precioConDescuento;
    let ingresosBrutos;
    let precioBrutoFinal;

    lampara = 35;
    descuento = 0;
    ingresosBrutos = 10;

    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparitas = document.getElementById("Marca").value;

    if (cantidadDeLamparas > 6) {
        descuento = 50;
    }

    switch (marcaLamparitas) {
        case "ArgentinaLuz":
            {
                if (cantidadDeLamparas == 5); {
                    descuento = 40;
                }
                if (cantidadDeLamparas == 4); {
                    descuento = 25;
                }
                if (cantidadDeLamparas == 3); {
                    descuento = 15;
                }
            }
            break;
        case "FelipeLamparas":
            {
                if (cantidadDeLamparas == 5); {
                    descuento = 30;
                }
                if (cantidadDeLamparas == 4); {
                    descuento = 25;
                }
                if (cantidadDeLamparas == 3); {
                    descuento = 10;
                }
            }
            break;
        case "JeLuz":
            {
                if (cantidadDeLamparas == 5); {
                    descuento = 30;
                }
                if (cantidadDeLamparas == 4); {
                    descuento = 20;
                }
                if (cantidadDeLamparas == 3); {
                    descuento = 5;
                }
            }
            break;
        case "HazIluminacion":
            {
                if (cantidadDeLamparas == 5); {
                    descuento = 30;
                }
                if (cantidadDeLamparas == 4); {
                    descuento = 20;
                }
                if (cantidadDeLamparas == 3); {
                    descuento = 5;
                }
            }
            break;
        case "Osram":
            {
                if (cantidadDeLamparas == 5); {
                    descuento = 30;
                }
                if (cantidadDeLamparas == 4); {
                    descuento = 20;
                }
                if (cantidadDeLamparas == 3); {
                    descuento = 5;
                }
            }
            break;
    }


    descuento = (cantidadDeLamparas * lampara) * descuento / 100;
    precioConDescuento = (cantidadDeLamparas * lampara) - descuento;

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    if (precioConDescuento > 119) {
        precioBrutoFinal = precioConDescuento * ingresosBrutos / 100;
        precioBrutoFinal = precioConDescuento + ingresosBrutos;

        alert("IIBB Usted pago " + precioBrutoFinal);
    }


}