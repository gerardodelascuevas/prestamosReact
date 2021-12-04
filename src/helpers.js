export function calcularTotal(cantidad, plazo){
// monto a solicitar --> tipo de interes
// 0-1000 = 25%
// 1001-5000 = 20%
// 5001-10000 = 15%
// +10000 = 10%

let totalCantidad; 
if(cantidad <= 1000) totalCantidad = cantidad * 0.25
if(cantidad >1000 && cantidad <= 5000) totalCantidad = cantidad * 0.20
if(cantidad >5000 && cantidad <= 10000) totalCantidad = cantidad * 0.15
if(cantidad >10000) totalCantidad = cantidad * 0.10


//calcular el plazo 
//plazo --> tipo de interes
        // 3=5%
        // 6=10%
        // 12=15%
        // 24=20%
let totalPlazo = 0; 

switch(plazo){
    case 3: 
    totalPlazo = cantidad * 0.05; 
    break;
    case 6: 
    totalPlazo = cantidad * 0.1; 
    break;
    case 12: 
    totalPlazo = cantidad * 0.15; 
    break;
    case 24: 
    totalPlazo = cantidad * 0.2; 
    break;
    default:
        break;         
}

    return totalCantidad + cantidad + totalPlazo; 

}