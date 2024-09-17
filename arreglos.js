let numeros = [1, 3, 5];

//mostrar longitud
console.log("Longitud inicial:", numeros.length); //3

//agregar un dato final
numeros.push(20);
console.log("Después de push:", numeros); //[1, 3, 5, 20]

//quitar el último dato
numeros.pop();
console.log("Después de pop:", numeros); //[1, 3, 5]

//mostrar elementos usando forEach
let sumaAreglo = 0;
numeros.forEach(num => {
    sumaAreglo += num;
});
console.log("Suma usando forEach:", sumaAreglo); //9

//filtrar valores <= 5
let filtro = numeros.filter(num => num <= 5);
console.log("Filtro <= 5:", filtro);  //[1, 3, 5]

//mapear valores multiplicados por 20
let mapeo = numeros.map(valor => "$" + (valor * 20));
console.log("Mapeo multiplicado por 20:", mapeo);  //["$20", "$60", "$100"]



let datos = ["Juan", true, 20, 10.56];

//mostrar longitud
console.log("Longitud inicial:", datos.length); //4

//agregar un dato final
datos.push("nuevoDato");
console.log("Después de push:", datos);  //["Juan", true, 20, 10.56, "nuevoDato"]

//quitar el último dato
datos.pop();
console.log("Después de pop:", datos);  //["Juan", true, 20, 10.56]

//mostrar elementos usando forEach
datos.forEach(item => {
    console.log("Elemento:", item);
});

//filtrar solo cadenas
let filtroDatos = datos.filter(item => typeof item === "string");
console.log("Filtro cadenas:", filtroDatos);  //["Juan"]

//mapear a cadenas con longitud
let mapeoDatos = datos.map(item => typeof item === "string" ? item.length : item);
console.log("Mapeo de longitud:", mapeoDatos);  //[4, true, 20, 10.56]



let meses = ["Enero", "Febrero", "Marzo", "Abril"];

//mostrar longitud
console.log("Longitud inicial:", meses.length); // 4

//agregar un dato final
meses.push("Mayo");
console.log("Después de push:", meses);  //["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

//quitar el último dato
meses.pop();
console.log("Después de pop:", meses);  //["Enero", "Febrero", "Marzo", "Abril"]

//mostrar elementos usando forEach
meses.forEach(mes => {
    console.log("Mes:", mes);
});

//filtrar meses que empiezan con 'M'
let filtroMeses = meses.filter(mes => mes.startsWith("M"));
console.log("Filtro meses con M:", filtroMeses);  //["Marzo"]

//mapear a longitud de cada mes
let mapeoMeses = meses.map(mes => mes.length);
console.log("Mapeo longitud de meses:", mapeoMeses);  //[5, 8, 5, 5]



let edades = [22, 25, 30, 18];

//mostrar longitud
console.log("Longitud inicial:", edades.length); //4

//agregar un dato final
edades.push(40);
console.log("Después de push:", edades);  //[22, 25, 30, 18, 40]

//quitar el último dato
edades.pop();
console.log("Después de pop:", edades);  //[22, 25, 30, 18]

//mostrar elementos usando forEach
let sumaEdades = 0;
edades.forEach(edad => {
    sumaEdades += edad;
});
console.log("Suma usando forEach:", sumaEdades); //95

//filtrar edades mayores de 20
let filtroEdades = edades.filter(edad => edad > 20);
console.log("Filtro edades > 20:", filtroEdades);  //[22, 25, 30]

//mapear edades incrementadas en 5 años
let mapeoEdades = edades.map(edad => edad + 5);
console.log("Mapeo edades + 5 años:", mapeoEdades);  //[27, 30, 35, 23]



let calificaciones = [85, 90, 78, 92];

//mostrar longitud
console.log("Longitud inicial:", calificaciones.length); //4

//agregar un dato final
calificaciones.push(88);
console.log("Después de push:", calificaciones);  //[85, 90, 78, 92, 88]

//quitar el último dato
calificaciones.pop();
console.log("Después de pop:", calificaciones);  //[85, 90, 78, 92]

//mostrar elementos usando forEach
let sumaCalificaciones = 0;
calificaciones.forEach(calificacion => {
    sumaCalificaciones += calificacion;
});
console.log("Suma usando forEach:", sumaCalificaciones); //345

//filtrar calificaciones superiores a 80
let filtroCalificaciones = calificaciones.filter(calificacion => calificacion > 80);
console.log("Filtro calificaciones > 80:", filtroCalificaciones);  //[85, 90, 92]

//mapear calificaciones con ajuste de 5 puntos
let mapeoCalificaciones = calificaciones.map(calificacion => calificacion + 5);
console.log("Mapeo calificaciones + 5:", mapeoCalificaciones);  //[90, 95, 83, 97]


