var dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado','domiingo'];

let diasSelect = dias[3]


if (diasSelect === 'lunes' || diasSelect === 'miércoles'){
    console.log('El dia '+ diasSelect + 'toca historia')
}if (diasSelect === 'martes' ){
    console.log('El dia '+ diasSelect + ' toca natacion')
}if (diasSelect === 'jueves' ){
    console.log('El dia '+ diasSelect + ' toca esgrima')
}else {
    console.log('Resto de la semana descando')

}
