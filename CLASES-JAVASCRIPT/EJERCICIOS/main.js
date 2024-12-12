//CONDICIONALES 
//IF
let calificacion = 7;
if (calificacion > 7) {
    console.log("He Aprobado El Examen");
}

//IF ELSE 
let dinero = 800;
if (dinero >= 800) {
    console.log("Puedo Comprar El Boleto Para El Concierto"); 
} else {
    console.log("No Puedo Comprar El Boleto Para El Concierto");
}

let numero1 = 20;
let numero2 = 10;
if (numero1 > numero2) {
    console.log("Numero 1 Es Mayor Que Numero 2");
} else {
    console.log("Numero 1 No Es Mayor Que Numero 2");
}

let edad = 18;
if (edad >= 18) {
    console.log("Puedo Beber Alcohol");
} else {
    console.log("No Puedo Beber Alcohol")
}

let agua = true;
let limon = true;
if (agua == true && limon == true) {
    console.log("Puedo Preparar Agua De Limon");
} else {
    console.log("No Puedo Preparar Agua De Limon");
}

//FUNCIONES
//FUNCION PARA SUMAR 2 NUMEROS
/*
function SumarNumeros (num1,num2) {
    const suma = num1 + num2;
    console.log(suma);
}
SumarNumeros(20,10);
*/

//FUNCION PARA OBTENER EL RESIDUO DE UN NUMERO
function ObtenerResiduo (numero1,numero2) {
    let residuo = numero1 % numero2;
    console.log(residuo);
}
ObtenerResiduo(100,2);

//FUNCION PARA SABER SI UN NUMERO ES PAR O IMPAR
function ParOImpar (numero) {
    if (numero % 2 === 0) {
        console.log("El Numero Es Par");
    } else {
        console.log("El Numero Es Impar");
    }
} 
ParOImpar(10);
ParOImpar(5);  
