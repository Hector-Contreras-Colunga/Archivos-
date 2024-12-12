console.log("Hola Mundo!");

let song = "Cruel Summer";
let song2 = "Umbrella";
console.log(song);
console.log(song2);

/*TIPOS DE DATO*/
/*
    NUMBER => GUARDAR NUMEROS
    STRING => GUARDAR CADENAS DE CARACTERES (TEXTOS)
    OBJECT => GUARDA ABSTRACCIONES DE COSAS REALES
    ARRAY => GUARDA COLECCIONES DE ELEMENTOS
    BOOLEAN => GUARDA VALORES BOOLEANOS (TRUE/FALSE)
*/

let someString = "Algun Texto";//STRING
let someNumber = 10; //NUMBER
let someObject = { //OBJETO
    name:"Hector",
    role:"Full Stack Developer",
    age:21,
    teachJavaScript: () => {
        console.log("Esta Es La Primer Sesion De JavaScript");
    }
}
let someArray = ["Cruel Summer","Diamonds","Firework","One Thing"];//ARRAY
let someBoolean = true;//BOOLEAN
let anotherBoolean = false;//BOOLEAN

/*TIPOS DE OPERADORES*/
/*
    ARITMETICOS
    PERMITEN REALIZAR OPERACIONES ARITMETICOS ENTRE DATOS
        SUMA => + => PERMITE SUMAR DATOS
            let suma = a + b;
        RESTA => - => PERMITE RESTAR NUMEROS
            let resta = a - b;
        MULTIPLICACION => * => PERMITE MULTIPLICAR NUMEROS
            let multiplicacion = a * b;
        DIVISION => / => PERMITE DIVIDIR NUMEROS
            let division = a / b;
        MODULO => % => PERMITE OBTENER EL RESIDUO DE UNA DIVISION
            let modulo = a % b;
        EXPONENTE => ** => PERMITE OBTENER UN NUMERO EXPONENCIADO 
            let squareNumber = a ** 2;
    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    DE ASIGNACION
        ASIGNACION => = => SIRVE PARA CAMBIAR EL VALOR DE UNA VARIABLE
        ASIGNACION ADITIVA => += => CAMBIA EL VALOR DE UNA VARIABLE SUMANDOLE ALGO
        ASIGNACION SUSTRACTIVA => -= => CAMBIA EL VALOR DE UNA VARIABLE SUSTRAYENDO ALGO
        ASIGNACION MULTIPLICATIVA => *= => CAMBIA EL VALOR DE UNA VARIABLE MULTIPLICANDOLA POR ALGO
        ASIGNACION DIVISIVA => /= => CAMBIA EL VALOR DE UNA VARIABLE DIVIDIENDOLA ENTRE ALGO
        ASIGNACION MODULAR => %= => CAMBIA EL VALOR DE UNA VARIABLE POR EL RESULTADO DE SU MODULO CON RESPECTO A OTRO NUMERO
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    DE COMPARACION
    LOS OPERADORES DE COMPARACION ME PERMITEN COMPARAR DOS VALORES CON BASE EN DIFERENTES CRITERIOS.SIEMPRE DEVUELVEN UN BOOLEANO
        let a = 5;
        let b = 8;
        let c = 5;
        let d = "5"
        MAYOR QUE => > => a > b; > FALSE
        MENOR QUE => < => a < b; > TRUE
        MAYOR O IGUAL QUE => >= => a >= c; >TRUE
        MENOR O IGUAL QUE => <= => a <= c > TRUE
        IGUAL QUE => == => c == d > TRUE (EVALUA QUE EL VALOR ENTRE 2 DATOS SEA IGUAL)
        IDENTICO QUE => === => c === d > FALSE (EVALUA QUE TANTO EL VALOR COMO EL TIPO DE DATO DE DOS NUMEROS SEA IGUAL) 
        DIFERENTE => != => c =! d > FALSE
        EXTREMA DIFERENCIACION => !== => c !== d > TRUE
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    LOGICO
    LOS OPERADORES LOGICOS ME PERMITEN PROCESAR LA INTERACCION ENTRE EL RESULTADO DE DOS EXPRESIONES DE JAVASCRIPT
            let a = 5;
            let b = 8;
            let c = 5;
            let d = "5"
        AND => DEVUELVE VERDADERO SI TODAS LAS EXPRESIONES EVALUADAS SON VERDADERAS
            exp1 && exp2 &&...
            (a >= c && c == d) => TRUE
            (b > a && c == d && b > c) => FALSE
        OR => DEVUELVE VERDADERO SI AL MENOR UNA DE LAS EXPRESIONES EVALUADAS ES VERDADERA
            exp1 || exp2 ||...
            (a >= c || c < d) => TRUE
            (c == d || a < b) => TRUE
            (c === d || c > b) => FALSE
        NOT => NEGACION DE UN VALOR
            !true => false
            !false => true

            let string = "Hector";
            string != "Contreras"
*/
ç