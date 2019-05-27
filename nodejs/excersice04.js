const examenes = {
    examen1:5,
    examen2:7,
    examen3:9
 }
 let promedio;
 let promedioEsperado = 8.5;
 function total () {
    promedio = (examenes.examen1 + examenes.examen2 + examenes.examen3) / 3;
 
 }total ();
 
 if (promedio >= promedioEsperado){
    console.log("Promedio de: "+ promedio + "Felicidades! ganaste un premio")
 }else if (promedio >= 6 ){
    console.log("No ganaste premio, pero has pasado el semestre :3, tu promedio fue de: " + promedio)
 }else {
    console.log("Has reprobado, promedio final de: " + promedio)
 
 }
